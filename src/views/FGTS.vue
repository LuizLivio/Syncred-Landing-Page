<template>
  <div class="fgts-page">
    <div class="header">
      <span class="header-title">Antecipe seu FGTS</span>
    </div>
    <div class="body">
      <div class="topics">
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/calendar.png" alt="Calendar">
          </div>
          <span class="topic-text">Antecipe até 10 parcelas anuais do saque-aniversário</span>
        </div>
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/chat.png" alt="Chat">
          </div>
          <span class="topic-text">Contratação 100% <strong>online</strong>, no conforto da sua casa</span>
        </div>
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/arrow.png" alt="Arrow">
          </div>
          <span class="topic-text">Dinheiro na hora</span>
        </div>
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/attention.png" alt="Attention">
          </div>
          <span class="topic-text">Sem consulta ao <strong>SPC</strong> ou <strong>SERASA</strong></span>
        </div>
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/discount.png" alt="Discount">
          </div>
          <span class="topic-text">Melhor taxa do mercado</span>
        </div>
        <div class="topic">
          <div class="icon-circle">
            <img src="/img/logos/currency.png" alt="Currency">
          </div>
          <span class="topic-text">Não compromete a sua renda</span>
        </div>
      </div>
      <div class="sim-form">
        <input
          class="currency-input"
          type="text"
          placeholder="Informe seu saldo do FGTS"
          v-model="fgtsAmount"
          @input="formatCurrency"
          :class="{ 'error': hasError }"
        />
        <button class="sim-button" @click="simulate" :disabled="!isValidAmount">
          Simular agora!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FGTSPage',
  data() {
    return {
      fgtsAmount: '',
      hasError: false,
      isValidAmount: false,
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

      let realValue = parseInt(numbers) / 100;

      this.fgtsAmount = 'R$ ' + realValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      this.isValidAmount = realValue > 0;
      this.hasError = false;
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
.fgts-page {
  color: white;
  padding: 20px;
  
  @media (min-width: 1001px){
    padding: 20px 100px;
  }
}

.header {
  display: flex;
  justify-content: space-between;

  &-title {
    font-size: 50px;
  }
}

.body {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  .sim-form {
    display: flex;
    gap: 20px;
    align-items: center;
    align-self: center;

    .currency-input {
      font-size: 20px;
      padding: 10px 30px;
      border: 1px solid;
      border-radius: 30px;
      position: relative;
      background: transparent;
      color: var(--light-blue);
      width: 350px;
      text-align: center;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        padding: 1px; /* border width */
        background: linear-gradient(135deg, #4782a4, #60c0c2);
        border-radius: inherit;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none; /* allows clicks to pass through */
        z-index: -1; /* keeps border behind content */
      }

      &::placeholder {
        color: var(--light-blue);
        opacity: 1;
      }
    }

    .sim-button {
      border: 1px solid;
      border-radius: 30px;
      padding: 10px 30px;
      background: linear-gradient(135deg, #4782a4, #60c0c2);
      color: white;
      font-size: 18px;
      cursor: pointer;
      text-shadow: 3px 1px 4px #374151;

      &:hover {
        background-size: 400% 400%;
        animation: buttonPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, rainbowShift 0.8s ease-in-out infinite;
      }
    }

    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  .topics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 40px;
    grid-auto-flow: column;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }

    .topic {
      display: flex;
      align-items: center;
      gap: 20px;

      .icon-circle {
        width: 100px;
        height: 100px;
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
          width: 60px;
          height: 60px;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }
      }

      .icon-circle img[src*="arrow.png"] {
        transform: translate(1px, 0) scale(1.1);
      }

      .icon-circle img[src*="attention.png"] {
        transform: translate(1px, -2px) scale(1.1);
      }
      
      .icon-circle img[src*="calendar.png"] {
        transform: translate(1px, -2px);
      }
      
      .icon-circle img[src*="discount.png"] {
        transform: translate(3px, 3px) scale(1.1);
      }

      .icon-circle img[src*="chat.png"] {
        transform: translate(2px, -3px) scale(1.1);
      }

      .icon-circle img[src*="currency.png"] {
        transform: translate(1px, 1px) scale(1.1);
      }

      .topic-text {
        color: var(--light-blue);
        font-size: 20px;
      }
    }
  }
}

@keyframes buttonPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
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
</style>
