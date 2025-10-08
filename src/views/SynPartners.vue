<template>
  <section class="synpartners-page">
    <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="cards-grid">
          <div class="card card-cta">
            <h2 class="card-title">Seja um SynPartner!</h2>
            <p class="card-subtitle">Construa sua renda extra com a SynCred</p>
            <a
              class="cta-button"
              href="https://wa.me/5513992006884?text=Olá! Gostaria de me tornar parceiro da SynCred. Quais são as vantagens?"
              target="_blank"
            >
              Quero ser parceiro agora!
            </a>
          </div>

          <div class="card card-dark">
            <img src="/img/logos/earning-card.png" alt="Comissões" class="card-logo">
            <h3 class="card-title">Comissões altas e sem limites</h3>
            <p class="card-subtitle">Receba pelas suas indicações e contratos fechados. Ganhos ilimitados com as melhores taxas do mercado.</p>
          </div>

          <div class="card card-dark">
            <img src="/img/logos/support-card.png" alt="Suporte" class="card-logo">
            <h3 class="card-title">Suporte e credibilidade</h3>
            <p class="card-subtitle">Parceria com os melhores bancos e fintechs. Conte com nosso suporte dedicado para vender mais e crescer junto conosco.</p>
          </div>

          <div class="card card-gradient">
            <img src="/img/logos/chat2.png" alt="Remoto" class="card-logo">
            <h3 class="card-title">Trabalho 100% remoto</h3>
            <p class="card-subtitle">Ganhe sem sair de casa! Com a SynCred, todo o processo é online, rápido e sem burocracia.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  name: 'SynPartners'
}
</script>

<style scoped lang="scss">
.synpartners-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  overflow-y: auto;
  padding: 20px;
}

.container {
  background: white;
  position: relative;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/img/bg-logo.png);
    background-repeat: repeat;
    background-size: 50vw;
    background-position: center;
    opacity: 1;
    pointer-events: none;
    z-index: 0;
  }
}

.hero {
  min-height: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  background: white;
  overflow-y: auto;
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

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

.card {
  padding: 2rem 3.5em;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .card-logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    align-self: flex-start;
  }

  .card-title {
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--light-blue);
    margin: 0;
  }

  .card-subtitle {
    font-size: x-large;
    line-height: 1.6;
    color: var(--light-blue);
    opacity: 0.9;
    margin: 0;
  }
}

.card-cta {
  background: transparent;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: none;
  }

  .card-title {
    font-size: 3rem;
    color: #43484e;
  }

  .card-subtitle {
    font-size: x-large;
    color: #43484e;
  }

  .cta-button {
    background: linear-gradient(135deg, #4782a4, #60c0c2);
    color: white;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    margin-top: 1rem;
    text-shadow: 3px 1px 4px #374151;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(71, 130, 164, 0.4);
    }
  }
}

.card-dark {
  background: #141519;
  text-shadow: 3px 1px 4px #374151;

  .card-title {
    color: var(--light-blue);
  }

  .card-subtitle {
    color: var(--light-blue);
  }
}

.card-gradient {
  background: linear-gradient(135deg, #0c4a5b, #27dddf);
  text-shadow: 3px 1px 4px #374151;

  .card-logo {
    width: 130px;
    height: 130px;
  }

  .card-title {
    color: white;
  }

  .card-subtitle {
    color: white;
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
  50% {
    box-shadow: 0 8px 35px rgba(56, 113, 238, 0.45);
    transform: scale(1.04);
  }
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
    height: 100%;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    height: 100%;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
  }

  .floating-element {
    font-size: 1.5rem;
  }
}

@media (max-width: 500px) {
  .card {
    padding: 1rem 1.5em;
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
    height: 100%;
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