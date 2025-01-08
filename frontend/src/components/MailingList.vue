<template>
    <section id="mailing">
        <h1>Subscribe to my <em>Mailing List!</em></h1>
        <form id="subscribeForm" @submit.prevent="submitForm">
            <div>
                <label for="firstName">First Name:</label>
                <input type="text" name="first_name" id="firstName" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div>
                <input type="checkbox" name="privacy_agreement" id="privacyAgreement" required>
                <label for="privacyAgreement">I agree to the Privacy Policy</label>
            </div>
            <div>
                <input type="checkbox" name="marketing" id="marketingOffers" value="1">
                <label for="marketingOffers">Send me Marketing Offers</label>
            </div>         
            <input type="submit" value="Subscribe">
        </form>
    </section>
</template>

<script>
export default {
    name: 'MailingList',
    methods: {
        submitForm() {
            const formData = new FormData(document.getElementById('subscribeForm'));
            fetch('assets/php/subscribe.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(() => {
                alert("An unexpected error occurred. Please try again later.");
            });
        }
    }
}
</script>

<style scoped>
.mailing-section {
  padding: 3rem 2rem;
  background-color: #111;
  color: white;
  text-align: center;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-in-out;
}

.mailing-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.mailing-title em {
  color: #888;
  font-style: normal;
}

.mailing-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  text-align: left;
}

.form-group label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: #000;
  color: white;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus {
  border-color: #888;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-group input {
  accent-color: white;
}

.subscribe-button {
  background-color: white;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.subscribe-button:hover {
  background-color: #aaa;
  transform: translateY(-3px);
}

.subscribe-button:active {
  transform: translateY(1px);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

