<template>
    
       <div class="copyright">
           <div class=" text-left copy-right ">
          <div class="container">
          <p> COPYRIGHT &copy; Bookstore | All Rights Reserved.</p>

          </div>
        </div>
       </div>
</template>
<script>
export default {
    name:'Copyright'
}
</script>

<style lang="scss" scoped>
$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
 $color-dark: #343a40;
 $color-card:#21262c;
 $color-soft-text : rgb(155, 155, 155);
.copy-right {
      background-color:$color-card;
      padding:20px 0 20px 0 ;
      p{
        color: $color-soft-text;
        font-size: 14px;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
  }
</style>