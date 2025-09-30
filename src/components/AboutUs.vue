<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Sobre nós
          </h1>
          <p class="hero-subtitle">Conheça um pouco mais sobre a <span class="gradient-text">SynCred</span></p>
        </div>
        <div class="info-cards-container">
          <div class="about-content">
            <div class="about-text">
              <h3 class="about-title">Nossa Experiência e Credibilidade</h3>
              <p class="about-description">
                Atuamos há 5 anos no mercado financeiro, com uma equipe especializada que entende as necessidades de cada cliente. Nossa experiência
                garante agilidade, segurança e credibilidade em cada operação.
              </p>
            </div>
            <div class="badges-container">
              <div class="badge">
                <div class="badge-icon">🏢</div>
                <div class="badge-content">
                  <span class="badge-highlight">Desde 2020</span>
                  <span class="badge-text">atuando no mercado de crédito</span>
                </div>
              </div>
              <div class="badge">
                <div class="badge-icon">👥</div>
                <div class="badge-content">
                  <span class="badge-highlight">Mais de 3000 clientes</span>
                  <span class="badge-text">atendidos ao mês</span>
                </div>
              </div>
              <div class="badge">
                <div class="badge-icon">✅</div>
                <div class="badge-content">
                  <span class="badge-highlight">100% Liberado</span>
                  <span class="badge-text">Aprovação para negativados</span>
                </div>
              </div>
            </div>
          </div>
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
  background-color: #16193091;
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
}

.hero-subtitle {
  font-size: 18px;
  font-weight: bold;
  color: var(--light-blue);
}

.gradient-text {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-subtitle .gradient-text{
  -webkit-text-fill-color: transparent;
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
  width: 100%;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(22, 25, 48, 0.95), rgba(30, 58, 138, 0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  box-shadow:
    0 25px 50px rgba(59, 130, 246, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 2px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(59, 130, 246, 0.05) 50%,
      transparent 70%
    );
    animation: shimmerContainer 8s ease-in-out infinite;
    pointer-events: none;
  }
}

.about-text {
  animation: fadeInLeft 1s ease-out;

  .about-title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    text-shadow: 0 4px 20px rgba(96, 165, 250, 0.3);
  }

  .about-description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.025em;
  }
}

.badges-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeInRight 1s ease-out 0.3s both;
}

.badge {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(124, 58, 237, 0.1));
  backdrop-filter: blur(15px);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 8px 25px rgba(59, 130, 246, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 300% 100%;
    animation: gradientFlow 4s ease-in-out infinite;
  }

  &:hover {
    transform: translateX(8px) scale(1.05);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow:
      0 20px 40px rgba(59, 130, 246, 0.25),
      0 8px 25px rgba(124, 58, 237, 0.15);

    .badge-icon {
      transform: scale(1.2) rotate(10deg);
      filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
    }

    .badge-highlight {
      text-shadow: 0 2px 12px rgba(59, 130, 246, 0.6);
    }
  }

  .badge-icon {
    font-size: 2.5rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
    animation: iconPulse 3s ease-in-out infinite;
  }

  .badge-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .badge-highlight {
    font-size: 1.3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .badge-text {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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
  .about-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2.5rem;
    text-align: center;
  }

  .about-text .about-title {
    font-size: 2rem;
  }

  .about-text .about-description {
    font-size: 1.1rem;
  }

  .badges-container {
    gap: 1.2rem;
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

  .about-content {
    padding: 2rem;
    gap: 2rem;
  }

  .about-text .about-title {
    font-size: 1.8rem;
  }

  .about-text .about-description {
    font-size: 1rem;
  }

  .badge {
    padding: 1.2rem 1.5rem;

    .badge-icon {
      font-size: 2rem;
    }

    .badge-highlight {
      font-size: 1.1rem;
    }

    .badge-text {
      font-size: 0.9rem;
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

  .about-content {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .about-text .about-title {
    font-size: 1.5rem;
  }

  .about-text .about-description {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .badge {
    padding: 1rem 1.2rem;
    gap: 1rem;

    .badge-icon {
      font-size: 1.8rem;
    }

    .badge-highlight {
      font-size: 1rem;
    }

    .badge-text {
      font-size: 0.85rem;
    }
  }
}
</style>