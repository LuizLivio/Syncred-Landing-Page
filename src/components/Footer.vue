<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Social Media -->
        <div class="social-section">
          <span class="label">SIGA-NOS!</span>
          <a href="https://www.facebook.com/share/1Cif7nc5F3" class="social-btn facebook" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://www.instagram.com/syncredfinanceira/" class="social-btn instagram" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>

        <!-- Contact -->
        <div class="contact-section">
          <span class="label">CONTATOS</span>
          <a href="mailto:syncredsolucoes@gmail.com" class="contact-link">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            syncredsolucoes@gmail.com
          </a>
          <a href="tel:+5513992006884" class="contact-link">
            <font-awesome-icon :icon="['fas', 'phone']" />
            (13) 99200-6884
          </a>
        </div>

        <!-- Legal Info -->
        <div class="legal-section">
          <span class="disclaimer">
            A SynCred Soluções não é uma instituição financeira e não realiza operações de crédito diretamente.
            Atua como correspondente bancário seguindo diretrizes do Banco Central (Resolução nº 3.954/2011).
            Avaliação conforme política da Instituição Financeira escolhida.
          </span>
        </div>

        <!-- Company Info -->
        <div class="company-section">
          <span class="company-info">
            <strong>SYNCRED SOLUÇÕES LTDA</strong> – CNPJ 49.574.591/001-08 |
            Rua Antônio de Andrade Vieira – Boqueirão, Praia Grande – SP | CEP: 11701-040
          </span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Fixed WhatsApp Button -->
  <a
    href="https://wa.me/5513992006884?text=Olá! Gostaria de saber mais sobre os serviços da SynCred."
    class="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Entre em contato via WhatsApp"
    title="Entre em contato via WhatsApp"
  >
    <font-awesome-icon :icon="['fab', 'whatsapp']" />
  </a>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: linear-gradient(135deg, rgb(21 23 27), rgb(28 46 57));
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: 60px;
  max-height: 60px;
  overflow: hidden;
}

.footer-container {
  width: 100%;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 60px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.75rem;
  line-height: 1.2;
  padding-bottom: 5px;
}

.label {
  font-weight: 700;
  color: #60a5fa;
  margin-right: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
}

.social-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  .social-btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 0.7rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.facebook {
      background: #1877f2;
    }

    &.instagram {
      background: linear-gradient(45deg, #e4405f, #fd1d1d, #fcb045);
    }
  }
}

.contact-section {
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.7rem;
    transition: color 0.2s ease;

    &:hover {
      color: #60a5fa;
    }

    .fa-svg-icon,
    svg {
      font-size: 0.7rem;
      color: #60a5fa;
    }
  }
}

.legal-section {
  flex: 1;
  max-width: 35%;
  min-width: 300px;

  .disclaimer {
    font-size: 0.65rem;
    line-height: 1.3;
    color: rgba(255, 255, 255, 0.6);
    text-align: left;
    display: block;
  }
}

.company-section {
  flex-shrink: 0;
  max-width: 250px;

  .company-info {
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: right;
    line-height: 1.3;

    strong {
      color: #60a5fa;
      font-weight: 700;
    }
  }
}

.whatsapp-button {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 50%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  box-shadow:
    0 8px 25px rgba(37, 211, 102, 0.4),
    0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 9999 !important;
  border: 3px solid rgba(255, 255, 255, 0.2);
  opacity: 1 !important;
  visibility: visible !important;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow:
      0 15px 40px rgba(37, 211, 102, 0.6),
      0 8px 25px rgba(18, 140, 126, 0.4);
    background: linear-gradient(135deg, #2ee370, #1ca55c);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  /* Pulse animation */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(135deg, #25d366, #128c7e);
    z-index: -1;
    animation: whatsappPulse 2s ease-in-out infinite;
  }

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
}

@keyframes whatsappPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 1200px) {
  .footer {
    height: 120px;
    max-height: 120px;
  }

  .footer-content {
    flex-wrap: wrap;
    gap: 1rem;
    height: 120px;
    padding: 0.5rem 0;
    justify-content: 	space-evenly;
    
  }

  .legal-section {
    order: 3;
    flex-basis: 100%;
    max-width: 100%;
    text-align: center;
    min-width: auto;

    .disclaimer {
      text-align: center;
    }
  }

  .company-section {
    order: 4;
    flex-basis: 100%;
    text-align: center;
    max-width: 100%;

    .company-info {
      text-align: center;
    }
  }

  .whatsapp-button {
    bottom: 140px;
  }
}

@media (max-width: 768px) {
  .footer {
    height: 120px;
    max-height: 120px;
  }

  .footer-container {
    padding: 0 1rem;
  }

  .footer-content {
    font-size: 0.5rem;
    gap: 0.5rem;
    height: 120px;
    padding: 0.5rem 0;
    justify-content: space-evenly;
  }

  .contact-section {
    gap: 0.3rem;
    align-items: flex-start;
  }

  .social-section .social-btn {
    width: 20px;
    height: 20px;
    font-size: 0.6rem;
  }

  .label {
    font-size: 0.65rem;
  }

  .legal-section .disclaimer {
    font-size: 0.6rem;
  }

  .company-section .company-info {
    font-size: 0.6rem;
  }

  .whatsapp-button {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
    bottom: 140px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .footer {
    height: 140px;
    max-height: 140px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    height: 140px;
    padding: 0.5rem 0;
    flex-wrap: nowrap;
  }

  .social-section,
  .contact-section {
    justify-content: center;
  }

  .legal-section .disclaimer {
    font-size: 0.55rem;
    line-height: 1.3;
  }

  .company-section .company-info {
    font-size: 0.55rem;
  }

  .whatsapp-button {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    bottom: 160px;
    right: 12px;

    &::before {
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
    }
  }
}
</style>