<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title">Barista Memory Training</h1>
            <h2 class="subtitle">Know your customers. Know their order.</h2>
          </div>
          <div class="column"></div>
          <div class="column">
            <div class="row cup espresso">
              <div class="pour_bottom"></div>
            </div>
          </div>
        </div>
        
        <div id="nav">
          <router-link to="/">Play Game</router-link> |
          <router-link to="/about">Info</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  
  .row{
    position: relative;
    float: right;
    &:before,
    &:after{
      position: absolute;
      content: '';
    }
  }
  .cup {
    margin: 20px;
    float: left;
    width: 95px;
    height: 75px;
    background: #B7C3D0;
    border-radius: 3px 3px 40px 40px;
    z-index: 1;
    &:after{
      top: 5px;
      right: -22px;
      width: 30px;
      height: 40px;
      border: 8px solid #B7C3D0;
      border-radius: 35px;
    }
  }

  .pour_bottom {
    position: absolute;
    z-index: 10;
    background: #8B4C39;
    bottom: 6px;
    left: 4px;
    // height: 30px;
    // width: 87px;
    border-radius: 1px 1px 40px 40px;
    animation: espresso 4s ease-in 0s normal 1 forwards running;
    // animation: rotate 10s ease-out;
  }

  .pour_bottom:before {
    bottom: -25px;
    width: 100px;
    height: 30px;
    border-radius:  0px 0px 25px 25px;
    background: #1d1d1d;
  }

  $val: 20px;

  .pour_bottom:after {
    bottom: 10px;
    border-radius:  0px 0px 42px 42px;
    background: rgba(0, 0, 0, 0);
    animation: fill 6s ease-in 0s normal 1 forwards running;
    // left: calc(50% - $val);
    // border-bottom: $val solid #8B4C39;
  }

  // .cup.latte{
  //   height: 100px;
  //   border-radius: 3px 3px 40px 40px;
  //   animation: latte 6s ease-in 1s normal 1 forwards running;
  //   .pour_bottom{
  //     background: #8B4C39;
  //   }
  // }

  // $latte: 30px;
  // @keyframes latte {
  //   0% {
  //     height: 10px;
  //     width: 60px;
  //     left: 20px;
  //     border-radius: 1px 1px 60px 60px;
  //   }
  //   25% {
  //     height: 20px;
  //     width: 70px;
  //     left: 15px;
  //     border-radius: 1px 1px 50px 50px;
  //   }
  //   50% {
  //     height: 30px;
  //     width: 80px;
  //     left: 8px;
  //     border-radius: 1px 1px 40px 40px;
  //   }
  //   100% {
  //     height: 100px;
  //     width: 87px;
  //     left: 4px;
  //     border-radius: 1px 1px 40px 40px;
  //   }
  // }

  $espresso: 30px;
  @keyframes espresso {
    0% {
      height: 10px;
      width: 60px;
      left: 20px;
      border-radius: 1px 1px 60px 60px;
    }
    25% {
      height: 20px;
      width: 70px;
      left: 15px;
      border-radius: 1px 1px 50px 50px;
    }
    50% {
      height: 30px;
      width: 80px;
      left: 8px;
      border-radius: 1px 1px 40px 40px;
    }
    100% {
      height: 40px;
      width: 87px;
      left: 4px;
      border-radius: 1px 1px 40px 40px;
    }
  }

  @keyframes fill {
    0% {
      $val: 20px;
      width: $val;
      left: calc(50% - $val);
      border-bottom: $val solid #8B4C39;
    }
    50% {
      $val: 50px;
      width: $val;
      left: calc(50% - $val);
      border-bottom: $val solid #8B4C39;
    }
    100% {
      $val: 100px;
      width: $val;
      left: calc(50% - $val);
      border-bottom: $val solid #8B4C39;
    }
  }
</style>

<script>
export default {
  name: "Header"
}
</script>


