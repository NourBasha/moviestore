<template>
  <div class="cast-card text-center">
    <div class="card cast-card" >
    
            <img v-if="img=='alt.jpg'" 
                 class="myimage img-responsive" :src="require(`@/imgs/${img}`)" alt="Image" />
            <img v-else  class="myimage img-responsive" :src="img" alt="Image" />
      
      <div class="card-body">
        <h5 class="card-title"> {{name}} </h5>
        <div v-if="roleName != '' && roleName != null && roleName != undefined">
                <span class="as">  as <p class="card-text role-name" > {{roleName}} </p>  </span> 
        </div>
      
      </div>
    </div>
  </div>
</template>


<script>

// `Image` will not be a string, pointing to  '/static/img/img.1e7c8df.jpg'
export default {
    name : 'CastCard',
    data(){
        return {

        }
    },
    props : ['img','name','roleName']
}
</script>

<style lang="scss" scoped>
$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
$color-dark: #343a40;
$color-card: #21262c;
$color-soft-text: rgb(155, 155, 155);
        .card{

            margin:0 0 20px ;
            background-color:#21262c;
            border: 1px solid white;

            .myimage{
               
                width: auto;
              
            }

            .card-body{
                min-height: 150px;
                border: none;
                
            .card-title{
                color: white;
                margin: 0;
                font-size: 20px;
                font-weight: bold;
            }
            .as{
                display: block;
                margin-top: 20px;
                font-size: 12px;
                color: $colo-secondary;
              
            }
            .role-name{
               display: block;
                margin-top: 5px;
                font-size: 15px;
                color: white;
                  width: 100%;
            }
            }
        }

        @media (max-width:576px) {
              .card{
                padding: 10px;
              }
        }
</style>