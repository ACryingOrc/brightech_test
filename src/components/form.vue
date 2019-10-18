<!-- В ДАЛЬНЕЙШЕМ ЛУЧШЕ ОТКАЗАТЬСЯ ОТ КОМПОНЕНТА ValidationProvider 
ТАК КАК ОШИБКИ ДОЛЖНЫ ПРИХОДИТЬ С СЕРВЕРА. 
ЭТОТ ФУНКЦИОНАЛ НЕ ИМЕЕТ СМЫСЛА НА ФРОНТЕ.

ОН ЗДЕСЬ ПОТОМУ ЧТО В ЗАДАНИИ НАПИСАНО ВАЛИДИРОВАТЬ ФОРМУ, ОН УСЛОЖНЯЕТ АРХИТЕКТУРУ ВЕРСТКИ, 
ПРОЩЕ ПРОВЕРЯТЬ ПОЛЯ НА ПУСТОТУ, А ОШИБКИ ВЫВОДИТЬ С СЕРВЕРА. -->

<template>
  <div class="theme_form">
    <form class="underlined-form" @submit.prevent="submitForm">

      <div class="field-block">
        <ValidationProvider 
          rules="required" 
          name="name" 
          v-slot="{ errors }"
        >
          <input 
            v-model="form.name" 
            type="text" 
            required 
            v-mask="'AAAAAAAAAAAAAAAA'"
            :class="[{ error: errors[0] }, 'theme_input']"
            placeholder="Name"
          />
          <span class="form-error">{{ errors[0] }}</span> <!-- DISPLAY FORM ERROR -->
        </ValidationProvider>
      </div> <!-- FIELD BLOCK -->

      <div class="field-block">
        <ValidationProvider 
          rules="required" 
          name="phone" 
          v-slot="{ errors }"
        >
          <input 
            v-model="form.phone" 
            type="text" 
            required 
            v-mask="'+############'"
            :class="[{ error: errors[0] }, 'theme_input']"
            placeholder="Phone    +380962151471"
          />
          <span class="form-error">{{ errors[0] }}</span> <!-- DISPLAY FORM ERROR -->
        </ValidationProvider>
      </div> <!-- FIELD BLOCK -->

      <div class="field-block">
        <ValidationProvider 
          rules="required|email" 
          name="email" 
          v-slot="{ errors }"
        >
          <input 
            v-model="form.email" 
            type="email" 
            required 
            :class="[{ error: errors[0] }, 'theme_input']"
            placeholder="Email"
          />
          <span class="form-error">{{ errors[0] }}</span> <!-- DISPLAY FORM ERROR -->
        </ValidationProvider>
      </div> <!-- FIELD BLOCK -->

      <div class="field-block checkbox">
        <input 
          type="checkbox"
          id="agreement" 
          name="agreement"
          required
          v-model="form.agreement"
          class="theme_checkbox" 
        >
        <label for="agreement" class="checkbox-label">I agree the processing of personal data</label>
      </div> <!-- FIELD BLOCK -->

      <div class="field-block">
        <button type="submit" class="theme_btn gray" :disabled="isSending">Get in touch</button>
      </div> <!-- FIELD BLOCK -->

    </form> <!-- UNDERLINED FORM -->
  </div>  <!-- CONTACT FORM -->
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'contact-form',
  data () {
    return {
      form: {
        name: null,
        phone: null,
        email: null,
        agreement: false
      },
      isSending: false
    }
  },
  methods: {
    submitForm (e) {
      let data = this.form
      this.isSending = true

      axios.post('http://httpbin.org/post', data)
      .then(response => {
        console.log('response', response)
        if (response.status === 200) {
          this.isSending = false
          alert('You have received a success status code!')
        }
      })
      .catch(error => {
        this.isSending = false
        console.log('error occured', error)
        alert('Error occured via axios request!')
      })
    }
  }
}
</script>
