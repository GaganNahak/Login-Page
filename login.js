function show () {
  let p = document.getElementById( "up" );

  if ( p.type = "password" )
  {

    p.type = "text";
  }

}
function show2 () {
  let p = document.getElementById( "up" );

  if ( p.type = "text" )
  {

    p.type = "password";
  }

}
function nu () {
  document.getElementById( "con" ).style = "transform:scale(1.8);background:transparent";
  let un = document.getElementById( "un" );
 let lo= document.getElementById( "lo" )
 lo.innerHTML="sign-Up";
 lo.style="background:linear-gradient(90deg,rgb(45,50,250),white,yellow-green);color:azure"
  un.placeholder = "New E-mail/phone no."
  document.getElementById( "np" ).remove()
  let up = document.getElementById( "up" );
  
  let ri = document.createElement( "input" )
  ri.placeholder = "enter OTP"
  ri.type = "text"
  ri.className = "otp"
  up.after( ri )
  let form = document.getElementById( "f" );
  let so = document.createElement( "button" )
  so.className = "otp"
  so.innerText = "Send OTP"
  so.type = "submit"
  so.style = "width:110px;margin-left:43px;margin-top:3px"
  form.after( so )
  let body = document.querySelector( "body" )
  body.classList = "ga"

  so.addEventListener( "click", () => {
    const m = Math.floor( Math.random() * 9000 ) + 1000
    let nm = m.toString()
    console.log( nm )
    alert( m )
    let lo = document.getElementById( "lo" )
    lo.addEventListener( "click", () => {
      if ( ri.value == nm )
      {
        // alert("o")
        let su = form.innerHTML = "account created "
        form.style = "font-size:large;text-align:center"
        let ok = document.createElement( "button" )
        so.remove()
        document.getElementById( "u" ).remove()
        document.getElementById( "u2" ).remove()
        lo.remove()
        document.getElementById( "f" ).append( ok )
        ok.innerHTML = "OK"
        ok.style = "height:20px;width:35px;margin-left:30px;margin-top:30px;"
        document.getElementById( "f" ).style = "align-items:center;"

      }
      else
      {
        form.innerHTML = "wrong OTP"
        so.remove()
        document.getElementById( "u" ).remove()
        document.getElementById( "u2" ).remove()
        lo.remove()
        let ok = document.createElement( "button" )
        document.getElementById( "f" ).append( ok )
        ok.innerHTML = "OK"
        ok.style = "height:20px;width:35px;margin-left:30px;margin-top:30px;"
        document.getElementById( "f" ).style = "align-items:center;"
      }
    } )
  } )

}
 

