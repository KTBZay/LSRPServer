const fs = require('fs');
try {
    function DWebRoot(name){
        const WebConfig = require('../config/WebConfig.json');
       if(!fs.existsSync(`../projects/${name}/`)){
            fs.mkdirSync(`../projects/${name}/`,{recursive: true});
        }
        if(!fs.existsSync(`../projects/${name}/assets/js/`)){
            fs.mkdirSync(`../projects/${name}/assets/js/`,{recursive: true})
        }
        if(!fs.existsSync(`../projects/${name}/assets/css/`)){
            fs.mkdirSync(`../projects/${name}/assets/css/`,{recursive: true})
        }
        setTimeout(() => {
            fs.writeFileSync(`../projects/${name}/assets/js/main.js`, `
            // collapsible text script
            var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }
            // commands search script
            $(document).ready(function(){
                $("#myInput").on("keyup", function() {
                  var value = $(this).val().toLowerCase();
                  $("#myCmd button").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                });
              });
            `)
            fs.writeFileSync(`../projects/${name}/assets/css/main.css`,`
            body {
                font-family: 'Poppins', sans-serif !important;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
                background-color: #131b21;
            }
            .bgn {
                background-color: black;
                border: 1px solid #fff;
            }
            .htext {
            color: #ffffff;
            font-weight: inherit;
            line-height: 1.2;
            }
            .ltext {
                color: #ffff;
            }
            .wh {
                color: #ffffff;
                font-weight: 700;
                padding-top: 30px;
            }
            .Hbot {
                color: #AD91FF !important;
            }
            .Hbot:hover {
                font-size: 30px;
                text-shadow: #ffffff;
            }
            .textt {
                color: #a2a8bd;
            }
            .card {
                border: 1px solid #ffffff;
            }
            .card:hover {
                 border: 3px solid black;
            }
            .cardds{
            margin-top: 30px !important;
            padding: 60px 50px !important;
            }
            .bgseconde {
                padding-bottom: 150px;
                background-color: #131b21;
            
            }
            .ttjoin {
                color: #ffffff;
                font-weight: 500;
                font-size: 36px;
                line-height: 51px;
            }
            span {
                font-weight: 700;
            }
            .footer-social-icons {
                width: 350px;
                display: block;
                margin: 0 auto;
                align-items: center;
            }
            .social-icon {
                color: #fff;
            }
            ul.social-icons {
                margin-top: 10px;
            }
            .social-icons li {
                vertical-align: top;
                display: inline;
                height: 100px;
            }
            .social-icons a {
                color: #fff;
                text-decoration: none;
            }
            .fa-facebook {
                padding:10px 14px;
                -o-transition:.5s;
                -ms-transition:.5s;
                -moz-transition:.5s;
                -webkit-transition:.5s;
                transition: .5s;
                background-color: #322f30;
            }
            .fa-facebook:hover {
                background-color: #3d5b99;
            }
            .fa-twitter {
                padding:10px 12px;
                -o-transition:.5s;
                -ms-transition:.5s;
                -moz-transition:.5s;
                -webkit-transition:.5s;
                transition: .5s;
                background-color: #322f30;
            }
            .fa-twitter:hover {
                background-color: #00aced;
            }
            .fa-github {
                padding:10px 14px;
                -o-transition:.5s;
                -ms-transition:.5s;
                -moz-transition:.5s;
                -webkit-transition:.5s;
                transition: .5s;
                background-color: #322f30;
            }
            .fa-github:hover {
                background-color: #5a32a3;
            }
            .add_to_discord {
                display: flex;
                align-items: center;
                background-color: blueviolet;
                border-radius: 8px;
                border: 0;
                font-weight: 600;
                font-size: 17px !important;
                line-height: 21px !important;
                color: #fff;
                padding: 27px;
                height: 58px;
                outline: none;
            }
            .add_to_discord svg {
                padding-right: 20px;
                box-sizing: unset;
            }
            .add_to_discord:hover {
                background-color: rgb(152, 67, 233);
                text-decoration: none;
              }
              
            .commandstitle {
                color: #ffffff;
            }
            .commandssub {
                color: gray;
            }
            .searchbox {
                background-color: #2b2a38;
                padding: 15px 27px;
                font-size: 20px;
                color: #ccc;
                border: 3px solid #2b2a38;
                border-radius: 8px;
                width: 40%;
            }
            .border {
                width: 65%;
                height: 2px;
                background: #fff;
                margin-left: 17.5%;
            }
            .collapsible {
                background-color: #202225;
                color: white;
                cursor: pointer;
                padding: 18px;
                width: 50%;
                border: none;
                text-align: left;
                outline: none;
                font-size: 23px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              }
              .collapsible span {
                font-size: 14px;
                color: grey;
            }
            .collapsible:after {
                content: '002B';
                color: white;
                font-weight: bold;
                float: right;
                margin-left: 5px;
              }
              
              .active:after {
                content: "2212";
              }
              .content {
                padding: 0 18px;
                width: 50%;
                margin-left: 25%;
                overflow: hidden;
                transition: max-height 0.3s ease-out;
                background-color: #2f3136;
                color: #6a707a;
                text-align: left;
                display: none;
              }
              .content h4 {
                margin-top: 12px;
                font-size: 20px;
                font-family: 'Cairo';
              }
            
              .card{
                background-color: rgb(255, 251, 251);
                color: red;
                max-width: 360px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                border-radius: 2rem;
                box-shadow: 0px 1rem 1.5rem rgba(0,0,0,0.5);
              }
              
              .card .banner{
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                height: 11rem;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                box-sizing: border-box;
              }
              .card .banner img{
                background-color: #fff;
                width: 8rem;
                height: 8rem;
                box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.3);
                border-radius: 50%;
                transform: translateY(50%);
                transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
              }
              
              .card .banner img:hover{
                transform: translateY(50%) scale(1.3);
              }
              
              .card h2.name{
                text-align: center;
                padding: 0 2rem 0.5rem;
                margin: 0;
              }
              
              .card .title{
                color: #a0a0a0;
                font-size: 0.85rem;
                text-align: center;
                padding: 0 2rem 1.2rem;
              }
              
              .card .actions{
                padding: 0 2rem 1.2rem;
                display: flex;
                flex-direction: column;
                order: 99;
              }
              
              .card .actions .follow-info{
                padding: 0 0 1rem;
                display: flex;
              }
              
              .card .actions .follow-info h2{
                text-align: center;
                width: 50%;
                margin: 0;
                box-sizing: border-box;
              }
              
              .card .actions .follow-info h2 a{
                text-decoration: none;
                padding: 0.8rem;
                display: flex;
                flex-direction: column;
                border-radius: 0.8rem;
                transition: background-color 100ms ease-in-out;
              }
              
              .card .actions .follow-info h2 a span{
                color: #1c9eff;
                font-weight: bold;
                transform-origin: bottom;
                transform: scaleY(1.3);
                transition: color 100ms ease-in-out;
              }
              
              .card .actions .follow-info h2 a small{
                color: #afafaf;
                font-size: 0.85rem;
                font-weight: normal;
              }
              
              .card .actions .follow-info h2 a:hover{
                background-color: #f2f2f2;
              }
              
              .card .actions .follow-info h2 a:hover span{
                color: #007ad6;
              }
              
              .card .actions .follow-btn button{
                color: inherit;
                font: inherit;
                font-weight: bold;
                background-color: #ffd01a;
                width: 100%;
                border: none;
                padding: 1rem;
                outline: none;
                box-sizing: border-box;
                border-radius: 1.5rem/50%;
                transition: background-color 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
              }
              
              .card .actions .follow-btn button:hover{
                background-color: #efb10a;
                transform: scale(1.1);
              }
              
              .card .actions .follow-btn button:active{
                background-color: #e8a200;
                transform: scale(1);
              }
            
              .licetitle {
                color: #ffff;
                margin: 5px;
                font-family: monospace;
              }
            
              .textlice {
                box-sizing: border-box;
                color:  #ffff;
                margin: 3px;
                letter-spacing: 1px;
              }
            
            .mastfoot.mb-auto{
                padding-bottom: 40px;
                padding: 20px;
                bottom: 0;
                width: 100%;
                height: auto;
                background-color: #212529;
                color: white;
            }
            
            
            ::-webkit-scrollbar {
                width: 12.2px;
            }
            
            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 1000px #38383b; 
            }
            
            ::-webkit-scrollbar-thumb {
                background: #202225; 
                border-radius: 4px;
            }
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
                background: rgb(84, 81, 81); 
              }
            `)
        }, 10000);
       
    }

    module.exports = DWebRoot;
} catch (error) {
    
}