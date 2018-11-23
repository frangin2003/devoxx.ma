body { background-color: red; } .container { box-sizing: border-box; width:
680px; margin: 0px auto; position: relative; /* HAVE SCALED TO FIT THE WINDOW */
transform: scale(0.6); } .laptop { box-sizing: border-box; width: 235px; height:
155px; background: #fc9252; border: 12px solid #e8ebf0; border-radius: 10px 10px
0 0; position: absolute; top: 200px; right: 30px; } .laptop > div { position:
absolute; } .laptop > .content { width: 211px; height: 131px; left: 0;
margin-left: 0; } .btm { width: 296px; height: 7px; bottom: -19px; left: 50%;
margin-left: -148px; border-radius: 0 0 20px 20px; background: #f4f5f7; z-index:
1; }

<div class="container">
  <div class="laptop">
    <div class="content"></div>
    <div class="btm"></div>
  </div>
</div>
