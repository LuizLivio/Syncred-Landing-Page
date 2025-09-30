<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">SynPartners</span>
          </h1>
          <p class="hero-subtitle">Transforme seu futuro financeiro com nossa plataforma de parceria exclusiva</p>
        </div>
        <div class="info-cards-container">
          <div class="info-card">
            <div class="card-icon">💻</div>
            <span class="info-card-title">Trabalho simples e 100% online</span>
            <span class="info-card-content">Você não precisa sair de casa para lucrar, aqui na <strong>SynCred</strong> é tudo digital, rápido e sem burocracia.</span>
          </div>
          <div class="info-card">
            <div class="card-icon">🏆</div>
            <span class="info-card-title">Confiança e suporte completo</span>
            <span class="info-card-content">Atuamos ao lado dos melhores bancos e fintechs, garantindo agilidade, segurança e credibilidade. Você terá suporte dedicado para vender mais e crescer conosco!</span>
          </div>
          <div class="info-card">
            <div class="card-icon">💰</div>
            <span class="info-card-title">Altas comissões e ganhos ilimitados</span>
            <span class="info-card-content">Melhores comissões do mercado, recebendo por cada contrato fechado, sem limite de faturamento.</span>
          </div>
        </div>
        <div class="hero-buttons">
          <a 
            class="primary-btn"
            href="https://wa.me/5513988304721?text=Olá! Gostaria de ser parceiro da SynCred."
            target="_blank"
          >
            <span class="btn-text">🚀 Quero ser parceiro!</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partnership'
}
</script>

<style scoped lang="scss">
.container {
  background-color: #b7e8f78f;
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  text-align: center;

  .gradient-text {
    -webkit-text-fill-color: transparent;
  }
}

.hero-subtitle {
  font-size: 18px;
  font-weight: bold;
  color: var(--dark-blue);
}

.gradient-text {
  background: linear-gradient(135deg, #132b5d, #7c3aed);;
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.primary-btn {
  background: linear-gradient(135deg, #5c71b6, #3b63e6);
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

.info-cards-container {
  display: flex;
  gap: 1.5rem;
}

.info-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--dark-blue), var(--medium-blue));
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
    opacity: 0.03;
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
    background: linear-gradient(135deg, #5c71b6, #3b63e6);
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
    font-size: 18px;
    line-height: 1.7;
    color: var(--light-blue);
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
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  animation: floatAround 8s ease-in-out infinite;
  opacity: 0.7;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  &.element-1 {
    top: 15%;
    left: 10%;
    animation-delay: 0s;
  }

  &.element-2 {
    top: 25%;
    right: 15%;
    animation-delay: 2s;
    animation-duration: 10s;
  }

  &.element-3 {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
    animation-duration: 12s;
  }

  &.element-4 {
    bottom: 30%;
    right: 25%;
    animation-delay: 6s;
    animation-duration: 9s;
  }
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

@keyframes titlePulse {
  0%, 100% {
    text-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    transform: scale(1);
  }
  50% {
    text-shadow: 0 6px 30px rgba(37, 99, 235, 0.5);
    transform: scale(1.02);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

@keyframes floatAround {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(-5px) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) translateX(5px) rotate(270deg);
  }
}

@keyframes shimmerContainer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (min-width: 1201px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
  }

  .floating-element {
    font-size: 1.5rem;
  }
}

@media (max-width: 1100px) {
  .info-cards-container {
    flex-direction: column;
    gap: 1rem;
  }

  .info-card {
    padding: 20px 16px;
  }
} 

@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn {
    width: 100%;
    max-width: 320px;
    font-size: 1.4rem;
  }

  .info-cards-container {
    flex-direction: column;
    gap: 1rem;
  }

  .info-card {
    padding: 25px 20px;

    .card-icon {
      font-size: 2.5rem;
    }

    &-title {
      font-size: 18px;
    }
  }

  .floating-element {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .container {
    padding: 40px 20px;
  }

  .primary-btn {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }

  .floating-element {
    font-size: 1rem;
  }

  .info-card {
    .card-icon {
      font-size: 2rem;
    }
  }
}
</style>