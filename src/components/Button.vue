<template>
  <button class="btn btn-primary" :style="{
      backgroundColor: buttonColor, 
      borderColor: buttonBorderColor,
      color: buttonFontColor  
      }">
      {{buttonText}}
  </button>
</template>

<script>
export default {
    props:{
        buttonText:{
            default: "Button"
        },
        buttonColor:{
            default: "transparent"
        },
        buttonBorderColor:{
            default: "#000"
        },
        buttonFontColor:{
            default: "#000"
        }
    }
}
</script>