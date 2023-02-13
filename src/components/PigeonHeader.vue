<template>
  <header>
    <div class="wrapper">
    <nav class="menu">
      <router-link to="/">トップ</router-link> |
      <router-link to="/regist">登録実例</router-link> |
      <router-link to="/list">一覧実例</router-link>
    </nav>
    </div>
  </header>
</template>

<style>/*ヘッダー（グローバルメニュー）*/
  ul{
    list-style-type:none;
  }

  nav ul, nav li{
    margin:	0 auto;
    padding:0;
  }

  nav li{
    display:			block;
    background-color:	#ddeeee;
  }

  nav a{
    text-decoration:none;
    color:			black;
  }
    
  nav a.router-link-exact-active {
  color: #42b983;
  }

  nav a:hover{
    color:gray;
  }
  /* スマートフォン用設定 */
  @media screen and (max-width:600px){
    /*ヘッダー（グローバルメニュー）*/
    header .wrapper{
      margin-top:	20px;
      margin-bottom:30px;
    }

    nav a{
      display:block;
    }

    nav li{
      margin-bottom:	5px;
      padding:		10px 15px;
      border-radius:	5px;
      max-width:		90vw;
      /*border-width:1px; デバッグ */
    }
  }
  /* PC用設定 */
  @media screen and (min-width:601px){

    /*ヘッダー（グローバルメニュー）*/
    .menu{
      text-align: 	center;
      display:block !important;
    }

    header .wrapper{
      margin-top:		20px;
      margin-bottom:	40px;
    }

    nav ul{
      display:		flex;	/* メニューを横に並べる */
      justify-content:center;
    }

    nav li{
      margin:			0 5px;
      padding:		10px 15px;
      border-radius:	5px;
      /*border-width:1px; デバッグ */
    }
  }
</style>