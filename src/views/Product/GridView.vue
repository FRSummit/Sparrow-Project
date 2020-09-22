<template>
  <div>
    <GridView />
  </div>
</template>

<script>
import GridView from "../../components/Product/GridView/GridView";

export default {
  components: {
    GridView,
  },
  created() {
// // CSS Style
// // <link rel="stylesheet" type="text/css" href="css/">
//       let link1 = document.createElement('link');
//       link1.setAttribute('rel', 'stylesheet')
//       link1.setAttribute('href', '../../superb-template/css/bootstrap.min.css');
//       document.head.appendChild(link1);

// // <link rel="stylesheet" type="text/css" href="css/" media="all">
//       let link2 = document.createElement('link');
//       link2.setAttribute('rel', 'stylesheet')
//       link2.setAttribute('href', '../../superb-template/css/font-awesome.css');
//       document.head.appendChild(link2);

// // <link rel="stylesheet" type="text/css" href="css/" media="all">
//       let link3 = document.createElement('link');
//       link3.setAttribute('rel', 'stylesheet')
//       link3.setAttribute('href', '../../superb-template/css/simple-line-icons.css');
//       document.head.appendChild(link3);

// // <link rel="stylesheet" type="text/css" href="css/" >
//       let link4 = document.createElement('link');
//       link4.setAttribute('rel', 'stylesheet')
//       link4.setAttribute('href', '../../superb-template/css/revslider.css');
//       document.head.appendChild(link4);

// // <link rel="stylesheet" type="text/css" href="css/">
//       let link5 = document.createElement('link');
//       link5.setAttribute('rel', 'stylesheet')
//       link5.setAttribute('href', '../../superb-template/css/owl.carousel.css');
//       document.head.appendChild(link5);

// // <link rel="stylesheet" type="text/css" href="css/">
//       let link6 = document.createElement('link');
//       link6.setAttribute('rel', 'stylesheet')
//       link6.setAttribute('href', '../../superb-template/css/owl.theme.css');
//       document.head.appendChild(link6);

// // <link rel="stylesheet" type="text/css" href="css/">
//       let link7 = document.createElement('link');
//       link7.setAttribute('rel', 'stylesheet')
//       link7.setAttribute('href', '../../superb-template/css/jquery.bxslider.css');
//       document.head.appendChild(link7);

// // <link rel="stylesheet" type="text/css" href="css/">
//       let link8 = document.createElement('link');
//       link8.setAttribute('rel', 'stylesheet')
//       link8.setAttribute('href', '../../superb-template/css/jquery.mobile-menu.css');
//       document.head.appendChild(link8);

// // <link rel="stylesheet" type="text/css" href="css/" media="all">
//       let link9 = document.createElement('link');
//       link9.setAttribute('rel', 'stylesheet')
//       link9.setAttribute('href', '../../superb-template/css/style.css');
//       document.head.appendChild(link9);
      this.addingGridScript();
      this.addingGridCustomScript();
  },
  mounted() {
      // this.addingGridScript();
      // this.addingGridCustomScript();
  },
  methods: {
      addingGridScript() {
      //   Script
        let script1 = document.createElement('script');
        script1.setAttribute('src', '../../superb-template/js/jquery.min.js');
        document.body.appendChild(script1);

        let script2 = document.createElement('script');
        script2.setAttribute('src', '../../superb-template/js/bootstrap.min.js');
        document.body.appendChild(script2);

        let script3 = document.createElement('script');
        script3.setAttribute('src', '../../superb-template/js/parallax.js');
        document.body.appendChild(script3);

        let script4 = document.createElement('script');
        script4.setAttribute('src', '../../superb-template/js/revslider.js');
        document.body.appendChild(script4);

        let script5 = document.createElement('script');
        script5.setAttribute('src', '../../superb-template/js/common.js');
        document.body.appendChild(script5);
  
        let script6 = document.createElement('script');
        script6.setAttribute('src', '../../superb-template/js/jquery.bxslider.min.js');
        document.body.appendChild(script6);

        let script7 = document.createElement('script');
        script7.setAttribute('src', '../../superb-template/js/owl.carousel.min.js');
        document.body.appendChild(script7);
  
        let script8 = document.createElement('script');
        script8.setAttribute('src', '../../superb-template/js/jquery.mobile-menu.min.js');
        document.body.appendChild(script8);
      },
      addingGridCustomScript() {
        let customScript1 = document.createElement('script');
        customScript1.setAttribute('src', './GridViewScript1.js');
        document.body.appendChild(customScript1);
        
        let customScript2 = document.createElement('script');
        customScript2.setAttribute('src', './GridViewScript2.js');
        document.body.appendChild(customScript2);
      }
  }
};
</script>