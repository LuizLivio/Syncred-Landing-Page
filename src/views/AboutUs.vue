<template>
  <section class="about-us">
    <div class="split-layout">
      <div class="left-panel">
        <h2 class="panel-title">Nossa Experiência e Credibilidade</h2>
        <p class="panel-text">
          Há 5 anos no mercado financeiro, a SynCred atua com uma equipe especializada que entende as necessidades de cada cliente.
          Nosso compromisso é oferecer agilidade, segurança e confiança em cada operação, sempre com soluções simples e acessíveis para todos.
        </p>
        <a
          class="primary-btn"
          href="https://wa.me/5513992006884?text=Tenho interesse em antecipar meu FGTS com a SynCred, pode me ajudar?"
          target="_blank"
          rel="noopener noreferrer"
        >Quero antecipar meu FGTS!</a>
      </div>

      <div class="right-panel">
        <div class="cards-grid">
          <div class="card-column">
            <div class="icon-circle">
              <img src="/img/logos/buildings.png" alt="Desde 2020">
            </div>
            <div class="card gradient-bg">
              <h3 class="card-title">Desde 2020</h3>
              <p class="card-text">Atuando no mercado de crédito com inovação e transparência.</p>
            </div>
          </div>

          <div class="card-column">
            <div class="icon-circle">
              <img src="/img/logos/people.png" alt="Mais de 3000 clientes">
            </div>
            <div class="card white-bg">
              <h3 class="card-title">Mais de 3000 clientes</h3>
              <p class="card-text">Atendidos todos os meses em todo o Brasil.</p>
            </div>
          </div>

          <div class="card-column">
            <div class="icon-circle">
              <img src="/img/logos/check.png" alt="100% de aprovação">
            </div>
            <div class="card white-bg">
              <h3 class="card-title">100% de aprovação</h3>
              <p class="card-text">Mesmo para clientes negativados, com liberação rápida e sem burocracia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped lang="scss">
.about-us {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  overflow-y: auto;
}

.split-layout {
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  height: 100%;
}

.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #141519;

  .panel-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    line-height: 1.2;
    margin: 0;
  }

  .panel-text {
    font-size: 1.125rem;
    color: white;
    line-height: 1.7;
    margin: 0;
    opacity: 0.95;
  }

  .primary-btn {
    background: linear-gradient(135deg, #4782a4, #60c0c2);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    animation: buttonPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, gradientShift 4s ease-in-out infinite;
    background-size: 200% 200%;
    text-decoration: none;
    text-align: center;
    line-height: 1;
    text-shadow: 3px 1px 4px #374151;
    align-self: center;

    &:hover {
      box-shadow: 0 15px 45px rgba(37, 99, 235, 0.6);
      background-size: 400% 400%;
      animation: buttonPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, rainbowShift 0.8s ease-in-out infinite;
    }
  }
}

.right-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/img/bg-logo.png);
  background-repeat: repeat;
  background-size: 35vw;
  background-position: center;
  padding: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.card-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.icon-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0c4a5b, #27dddf);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: iconPulse 3s ease-in-out infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(45deg, #0c4a5b, #27dddf, #4782a4, #60c0c2, #0c4a5b);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: gradientRotate 3s linear infinite;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }
}

.card {
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  transition: all 0.3s ease;
  height: 350px;
  width: 250px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 3px;
    background: linear-gradient(45deg, #0c4a5b, #27dddf, #4782a4, #60c0c2, #0c4a5b);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: gradientRotate 3s linear infinite;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    color:#334155;
    position: relative;
    z-index: 1;
  }

  .card-text {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 600;
    margin: 0;
    position: relative;
    z-index: 1;
  }
}

.gradient-bg {
  background: linear-gradient(135deg, #0c4a5b, #27dddf);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: linear-gradient(135deg, #0c4a5b, #27dddf);
    border-radius: 17px;
    z-index: 0;
  }

  .card-title {
    background: linear-gradient(135deg, #ffffff, #e0f2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-text {
    color: white;
  }
}

.white-bg {
  background: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: white;
    border-radius: 17px;
    z-index: 0;
  }

  .card-text {
    color: #334155;
  }
}

@keyframes buttonPulse {
  0% {
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
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

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes gradientRotate {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

@media (max-width: 1200px) {
  .split-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .left-panel {
    text-align: center;

    .primary-btn {
      align-self: center;
    }
  }

  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .left-panel {
    .panel-title {
      font-size: 2rem;
    }

    .panel-text {
      font-size: 1rem;
    }

    .primary-btn {
      width: 100%;
      max-width: 400px;
      font-size: 1.125rem;
    }
  }

  .icon-circle {
    width: 100px;
    height: 100px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .card {
    padding: 1.5rem 1.25rem;
    min-height: 160px;

    .card-title {
      font-size: 1.25rem;
    }

    .card-text {
      font-size: 0.95rem;
    }
  }
}

@media (max-width: 480px) {
  .about-us {
    padding: 20px 10px;
  }

  .left-panel {
    padding: 1rem;

    .panel-title {
      font-size: 1.75rem;
    }

    .panel-text {
      font-size: 0.95rem;
    }

    .primary-btn {
      font-size: 1rem;
      padding: 0.875rem 1.5rem;
    }
  }

  .cards-grid {
    gap: 2rem;
  }

  .icon-circle {
    width: 90px;
    height: 90px;

    img {
      width: 55px;
      height: 55px;
    }
  }

  .card {
    padding: 1.25rem 1rem;
    min-height: 150px;

    .card-title {
      font-size: 1.125rem;
    }

    .card-text {
      font-size: 0.9rem;
    }
  }
}
</style>
