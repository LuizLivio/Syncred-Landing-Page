<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Antecipe seu
            <span class="gradient-text fgts-text">FGTS</span>
            de forma simples, rápida e sem sair de casa!
          </h1>
          <p class="hero-description">
            Dinheiro na conta em poucas horas, sem burocracia e com as melhores taxas do mercado.
          </p>
          <div class="hero-visual mobile-visual">
            <div class="video-container">
              <video
                ref="heroVideo2"
                :src="videoSource"
                autoplay
                loop
                muted
                playsinline
                controls
                class="hero-video"
              >
              </video>
            </div>
          </div>
          <div class="hero-buttons">
            <a
              class="primary-btn"
              href="https://wa.me/5513992006884?text=Olá! Gostaria de solicitar uma antecipação do meu FGTS."
              target="_blank"
              rel="noopener noreferrer"
            >Quero antecipar meu FGTS</a>
          </div>
        </div>
        <div class="hero-visual desktop-visual">
          <div class="video-container">
            <video
              ref="heroVideo"
              :src="videoSource"
              autoplay
              loop
              muted
              playsinline
              controls
              class="hero-video"
            >
            </video>
          </div>
        </div>
      </div>
      <div class="fgts-info-cards-container">
        <div class="fgts-info-card">
          <span class="fgts-info-card-title">Use como quiser</span>
          <span class="fgts-info-card-subtitle">O dinheiro é seu!</span>
          <span class="fgts-info-card-content">Antecipe o FGTS e use o dinheiro para pagar dívidas, realizar uma viagem, investir em um projeto ou até mesmo comprar algo que sempre sonhou.</span>
        </div>
        <div class="fgts-info-card">
          <span class="fgts-info-card-title">Vantagens Exclusivas</span>
          <div class="fgts-info-card-content">
            <div class="benefit-item"><span class="checkmark">✅</span> 100% aprovação para negativados</div>
            <div class="benefit-item"><span class="checkmark">✅</span> 100% feito pelo celular</div>
            <div class="benefit-item"><span class="checkmark">✅</span> 100% Prático</div>
          </div>
        </div>
        <div class="fgts-info-card">
          <span class="fgts-info-card-title">Antecipe até 10 anos do seu saque aniversário com a SynCred em poucos minutos</span>
          <span class="fgts-info-card-subtitle">Simule grátis e descubra quanto pode antecipar do seu FGTS.</span>
          <div class="fgts-info-card-content sim-form-container">
            <span>Informe seu saldo do FGTS: </span>
            <div class="sim-form">
              <input
                class="currency-input"
                type="text"
                placeholder="R$ 0,00"
                v-model="fgtsAmount"
                @input="formatCurrency"
                :class="{ 'error': hasError }"
              />
              <button class="sim-button" @click="simulate" :disabled="!isValidAmount">
                Simular!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useVideoStore } from '../stores/videoStore'

export default {
  name: 'FGTSSection',
  data() {
    return {
      fgtsAmount: '',
      hasError: false,
      isValidAmount: false,
      videoSource: '/assets/card-showcase.mp4',
      cleanup: null
    }
  },
  mounted() {
    const { onVideoChange, getHeroVideoSource } = useVideoStore()

    // Set initial video source
    this.videoSource = getHeroVideoSource()

    // Set video playback speed to 1.5x (50% faster)
    this.$nextTick(() => {
      if (this.$refs.heroVideo) {
        this.$refs.heroVideo.playbackRate = 1.7;
      }
      if (this.$refs.heroVideo2) {
        this.$refs.heroVideo2.playbackRate = 1.7;
      }
    })

    // Listen for video changes
    this.cleanup = onVideoChange((newVideoSource) => {
      console.log('aqui')
      this.videoSource = newVideoSource
      this.$nextTick(() => {
        if (this.$refs.heroVideo) {
          this.$refs.heroVideo.load();
          this.$refs.heroVideo.playbackRate = 1.7;
        }
        if (this.$refs.heroVideo2) {
          this.$refs.heroVideo2.load();
          this.$refs.heroVideo2.playbackRate = 1.7;
        }
      })
    })
  },
  beforeUnmount() {
    // Clean up event listener
    if (this.cleanup) {
      this.cleanup()
    }
  },
  methods: {
    formatCurrency(event) {
      let value = event.target.value;

      // Remove everything except digits
      let numbers = value.replace(/\D/g, '');

      if (numbers === '') {
        this.fgtsAmount = '';
        this.isValidAmount = false;
        return;
      }

      // Convert to cents (divide by 100 to get real value)
      let realValue = parseInt(numbers) / 100;

      // Format as Brazilian currency
      this.fgtsAmount = 'R$ ' + realValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      this.isValidAmount = realValue > 0;
      this.hasError = false;
    },
    getNumericValue() {
      if (!this.fgtsAmount) return 0;
      // Extract only digits and convert back from cents
      const numbers = this.fgtsAmount.replace(/\D/g, '');
      return parseInt(numbers) / 100 || 0;
    },
    simulate() {
      if (this.isValidAmount) {
        const message = `Olá, gostaria de simular a antecipação do meu FGTS com saldo de ${this.fgtsAmount}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/5513992006884?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #add8e624;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 60px;
  box-shadow: 1px 1px 8px 1px var(--dark-blue);
}

.hero {
  min-height: fit-content;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--light-blue);
}

.gradient-text {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
}

.fgts-text {
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.video-container {
  max-width: 500px;
  position: relative;
}

.hero-video {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  clip-path: inset(5px round 20px);
}

.primary-btn {
  background: radial-gradient(var(--dark-blue), rgb(40, 40, 129));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
  animation: buttonPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, gradientShift 4s ease-in-out infinite;
  background-size: 200% 200%;
  width: 500px;
  text-decoration: none;
  text-align: center;
  line-height: 1;
}

.primary-btn:hover {
  box-shadow: 1px 1px 1px blue;
  box-shadow: 0 15px 45px rgba(37, 99, 235, 0.6);
  /* background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57); */
  background-size: 400% 400%;
  animation: buttonPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, rainbowShift 0.8s ease-in-out infinite;
}

.secondary-btn {
  background: transparent;
  color: #374151;
  border: 2px solid #e5e7eb;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secondary-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-2px);
}

.play-icon {
  width: 18px;
  height: 18px;
}

.fgts-info-cards-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
}

.fgts-info-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.9));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow:
    0 8px 32px rgba(59, 130, 246, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  gap: 12px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/img/logo-syncred-1.png');
    background-size: 50px;
    background-repeat: repeat;
    background-position: center;
    opacity: 0.08;
    z-index: 0;
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #7c3aed, #2563eb);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 16px 48px rgba(59, 130, 246, 0.25),
      0 4px 16px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: rgba(59, 130, 246, 0.4);
  }

  &-title {
    font-weight: 800;
    font-size: 20px;
    background: linear-gradient(135deg, #1e40af, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.3;
    margin-bottom: 4px;
    position: relative;
    z-index: 1;
  }

  &-subtitle {
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #4f46e5;
    opacity: 0.9;
    line-height: 1.4;
    position: relative;
    z-index: 1;
  }

  .sim-form-container {
    background-color: #0a1146c2;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }

  &-content {
    text-align: start;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 600;
    position: relative;
    z-index: 1;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.025em;
    gap: 8px;

    span {
      text-align: center;
      background: linear-gradient(135deg, #334155, #475569);
      -webkit-background-clip: text;
      background-clip: text;
      font-weight: 700;
    }

    .benefit-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      padding: 6px 0;
      transition: all 0.2s ease;

      &:hover {
        transform: translateX(4px);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }

      .checkmark {
        font-size: 18px;
        filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.4));
      }
    }

    .sim-form {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 10px;
      white-space: nowrap;
      justify-content: center;
    }
  }
}

.currency-input {
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  color: var(--dark-blue);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  outline: none;
  max-width: 300px;

  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }

  &:focus {
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: rgba(255, 255, 255, 0.95);
  }

  &.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
}

.sim-button {
  padding: 12px 24px;
  background: linear-gradient(135deg, goldenrod, rgb(109, 76, 15));
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, rgb(109, 76, 15), goldenrod);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #94a3b8;
  }
}

.trust-text {
  color: #64748b;
  font-weight: 500;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;

  &.mobile-visual {
    display: none; // Hidden by default, shown on mobile
  }
}

.floating-card {
  position: absolute;
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 6s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.floating-card:hover {
  transform: scale(1.05);
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 10%;
  right: 15%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-weight: 600;
  color: #374151;
}

.central-circle {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);
}

.sync-animation {
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes buttonPulse {
  0% {
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3), 0 0 0 0 rgba(37, 99, 235, 0.4);
    transform: scale(1);
  }
  /* 30% {
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4), 0 0 0 8px rgba(37, 99, 235, 0.15);
    transform: scale(1.03);
  } */
  50% {
    box-shadow: 0 8px 35px rgba(56, 113, 238, 0.45);
    transform: scale(1.04);
  }
  /* 70% {
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4), 0 0 0 8px rgba(37, 99, 235, 0.15);
    transform: scale(1.03);
  } */
  100% {
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    transform: scale(1);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes rainbowShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.4));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(16, 185, 129, 0.6));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.4));
  }
}

@media (max-width: 1400px) {
  .sim-form{
    flex-direction: column;
  }
}

@media (min-width: 1201px) {
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .desktop-visual {
    display: flex;
  }

  .mobile-visual {
    display: none;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .hero-description {
    margin-bottom: 0;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
  }

  .desktop-visual {
    display: none;
  }

  .mobile-visual {
    display: flex !important;
    justify-content: center;
    margin: 1rem 0;
    order: 2; /* Between description and buttons */
  }

  .hero-description {
    order: 1;
  }

  .hero-buttons {
    order: 3;
  }
}

@media (max-width: 1100px) {
  .fgts-info-cards-container {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  .fgts-info-card {
    padding: 20px 16px;
  }
} 

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    max-width: 280px;
  }

  .fgts-info-cards-container {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  .fgts-info-card {
    padding: 20px 16px;

    &-title {
      font-size: 18px;
    }
  }

  .floating-card {
    font-size: 0.875rem;
    padding: 1rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .central-circle {
    width: 150px;
    height: 150px;
  }

  .sync-animation {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .floating-card {
    padding: 0.75rem;
  }

  .card-text {
    font-size: 0.75rem;
  }
}
</style>