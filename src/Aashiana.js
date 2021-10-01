import React from 'react';
import './Aashiana.css';

class Aashiana extends React.Component{
    name="Sorry no any event Today!";
    wish="";
    to="";
    age="";
    me="Click me !";
    desc="Don't Be Sad Next Event Will be Soon !!"
    src=['https://media.tenor.com/images/7a1a4acf852f33dbf4b9d0f51320bc0f/tenor.gif'
        ,'images/aish.jpeg','images/bhairvi.jpeg','images/charu.jpeg','images/garvit.jpeg','images/jyoti.jpeg',
    'images/md_ann.jpeg','images/me.jpeg','images/mom.jpeg','images/nani.jpeg','images/nanu.jpeg','images/nn_ann.jpeg',
    'images/nonu.jpeg','images/papa.jpeg','images/rajesh.jpeg','images/rasi_ann.jpeg','images/simmi.jpeg','images/vikas.jpeg',
    'images/vj_ann.jpeg','images/mothers.jpeg'];
    url="";
    constructor(){
        super();
        var today=new Date();
        var date=today.getDate();
        var month=today.getMonth();
        var year=today.getFullYear();
        this.state={
            date:date,
            month:month+1,
            year:year,
            menu:false,
            music:false,
            birSong:new Audio("./birthday.mp3"),
            anniSong:new Audio("./anniversary.m4a"),
            video:false,
        }
    }
    
    check(d,m,y){
        var nm=0;
        if(d===9 && m===10){
            this.name="Aishwarya Aneja";
            this.age=y-1998;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=1;
            this.me="Click My Pic !!";
            this.desc=
            "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n"+

            "I : Balance is key for I. You are a compassionate person who feels things deeply. Make sure you stick close to projects and have direction — otherwise, you might suffer from anxiety. Many Is have an affinity for the arts.\n"+
            
            "S : Though charming and charismatic, S is also very sensitive and those with the letter in their names feel things deeply. This, in turn, can lead to overly dramatic reactions and an intense inner life. Making sure you're seeing a situation for what it is will help you balance and steady your emotional ups and downs.\n"+
            
            "H : H represents creativity and power. It is advisable to those with the letter in their name to fight any doubts you might have about yourself and spend plenty of time outdoors.\n"+
            
            "W : You're intuitive, determined, charismatic, and have a strong sense of purpose. But, you tend to be a chronic procrastinator. (We know a thing or two about that.) Take full advantage of your own creativity.\n"+
            
            "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n"+
            
            "R : You feel feelings — a lot. And, this inner intensity often emanates outward. Not only do you possess an inherently kind nature, but you also have an exemplary work ethic — meaning you'll make sure a job gets done, no matter what. That said, Numerology advises you make sure to keep a balance and to work well with others.\n"+
            
            "Y : Pushing the envelope is practically your middle name, Ys. (Can't be tamed, right, Miley?) Your ambition and courage make you naturally independent, even though you come across as reserved. Be careful not to be too slow in making decisions — trust your natural gift of intuition.\n"+
        
            "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.";
        }else if(d===12 && m===12){
            this.name="Bhairvi Mehndiratta";
            this.age=y-2007;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=2;
            this.me="Click My Pic !!";
        }else if(d===3 && m===6){
            this.name="Chaitanya Mehndiratta";
            this.age=y-2005;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=3;
            this.me="Click My Pic !!";
        }else if(d===25 && m===1){
            this.name="Garvit Mehndiratta";
            this.age=y-2012;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=4;
            this.me="Click My Pic !!";
        }else if(d===5 && m===1){
            this.name="Mrs Jyoti Mehndiratta";
            this.age=y-1984;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=5;
            this.me="Click My Pic !!";
        }else if(d===21 && m===11){
            this.name="Mr Rajiv AND Mrs Savi";
            this.age=y-1997;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Anniversary"
            nm=6;
            this.me="Click Our Pic !!";
            this.url="https://drive.google.com/file/d/18HGP3ocCX0JtDYyvtJlf1p_C_XDnc2Jj/preview";
            this.desc="सात फेरों से बंधा यह प्यार का बंधन,\n"+
            "जीवन भर यूं ही बंधा रहे,\n"+
            "किसी की नजर ना लगे आपके प्यार को\n"+
            "और आप यूं ही हर साल सालगिरह मनाते रहे।";
        }else if(d===21 && m===7){
            this.name="Navneet Aneja";
            this.age=y-2001;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=7;
            this.me="Click My Pic !!";
        }else if(d===3 && m===12){
            this.name="Mrs Savi Aneja";
            this.age=y-1976;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=8;
            this.me="Click My Pic !!";
        }else if(d===28 && m===8){
            this.name="Mrs Asha Rani Mehndiratta";
            this.age=y-1957;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=9;
            this.me="Click My Pic !!";
            this.desc="WISHING HAPPY BIRTHDAY TO THIS SPECIAL LADY (#nani,#dadi,#mom,#saas,#wife)\nCONGRATULATIONS!!";
        }else if(d===8 && m===4){
            this.name="Mr Om Prakash Mehndiratta";
            this.age=y-1950;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=10;
            this.me="Click My Pic !!";
        }else if(d===4 && m===2){
            this.name="Mr Om Prakash And Mrs Asha Rani";
            this.age=y-1976;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Anniversary"
            nm=11;
            this.me="Click Our Pic !!";
        }else if(d===11 && m===8){
            this.name="Naunidh Mehndiratta";
            this.age=y-2008;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=12;
            this.me="Click My Pic !!";
            this.desc="N : Always one to take the path less traveled, you are a 'think outside the box' kind of person — creative and original.you are also quite systematic about your life, documenting experiences in diary form, and might have your share of romantic 'entanglements.'\n"+

            "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n"+
            
            "U : If you have U in your name, then you probably have a give-and-take kind of life. You might gain a lot, only to lose it, but will always break even. The trick here is to commit — whatever the project or whoever the person. You're naturally lucky, but you should also remember to tap into your instinct and creativity.\n"+
            
            "N : Always one to take the path less traveled, you are a 'think outside the box' kind of person — creative and original.you are also quite systematic about your life, documenting experiences in diary form, and might have your share of romantic 'entanglements.'\n"+
            
            "I : Balance is key for I. You are a compassionate person who feels things deeply. Make sure you stick close to projects and have direction — otherwise, you might suffer from anxiety. Many Is have an affinity for the arts.\n"+
            
            "D : Determined, grounded, and pragmatic — sometimes to a fault. You have great systems in place for getting things done...[but] be careful not to be too stubborn, because at your best, you shine under pressure and can get things done fast,\n"+
            
            "H : H represents creativity and power.you fight any doubts you might have about yourself and spend plenty of time outdoors.";
            
        }else if(d===20 && m===2){
            this.name="Mr Rajiv Aneja";
            this.age=y-1972;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=13;
            this.me="Click My Pic !!";
        }else if(d===17 && m===6){
            this.name="Mr Rajesh Mehndiratta";
            this.age=y-1978;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=14;
            this.me="Click My Pic !!";
            this.desc=
            "R : You feel feelings — a lot. And, this inner intensity often emanates outward. Not only do you possess an inherently kind nature, but you also have an exemplary work ethic — meaning you'll make sure a job gets done, no matter what. That said, Numerology.com advises you make sure to keep a balance and to work well with others.\n"+
            "A : It's little wonder A names are drawn to adjectives like ambitious or adventurous. You do not change your mind under someone else's pressure, explains Numerology.com. A natural leader, you want to be in charge and need to have a purpose. You have courage, but make sure you're also flexible and take other people's ideas seriously. You may have some arrogant tendencies though (no one's perfect) — so just be sure to keep 'em in check.\n"+
            "J : In this specific case, 'J' is for justice. You are all about fairness and balancing the scales, says Numerology.com. You make an exemplary friend and try hard to make sure everyone is happy and comfortable. Don't forget about your own needs, though. Make sure to motivate yourself enough to tap into natural talents.\n"+
            "E : Es are a keen bunch, not easily deceived, and they can see a situation from many different sides. According to Numerology.com, those with the letter in their name are freedom-loving, sensual, and enthusiastic. You not only believe strongly in falling in love, but are outgoing and the life of the party.\n"+
            "S : Though charming and charismatic, S is also very sensitive and those with the letter in their names feel things deeply, according to Numerology.com. This, in turn, can lead to overly dramatic reactions and an intense inner life. Making sure you're seeing a situation for what it is will help you balance and steady your emotional ups and downs.\n"+
            "H : H represents creativity and power. Numerology.com advises those with the letter in their name to fight any doubts you might have about yourself and spend plenty of time outdoors.";
        }else if(d===13 && m===7){
            this.name="Mr Rajesh AND Mrs Smita";
            this.age=y-2003;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Anniversary"
            nm=15;
            this.me="Click Our Pic !!";
        }else if(d===16 && m===2){
            this.name="Mrs Smita Mehndiratta";
            this.age=y-1981;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=16;
            this.me="Click My Pic !!";
        }else if(d===7 && m===1){
            this.name="Mr Vikas Mehndiratta";
            this.age=y-1982;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Birthday"
            nm=17;
            this.me="Click My Pic !!";
        }else if(d===1 && m===10){
            this.name="Mr Vikas AND Mrs Jyoti";
            this.age=y-2006;
            this.to="TO"
            this.wish="Wishing "+this.age+" Happy Anniversary"
            nm=18;
            this.me="Click Our Pic !!";
            this.desc="सात फेरों से बंधा यह प्यार का बंधन,\n"+
            "जीवन भर यूं ही बंधा रहे,\n"+
            "किसी की नजर ना लगे आपके प्यार को\n"+
            "और आप यूं ही हर साल सालगिरह मनाते रहे।";
            this.url="https://drive.google.com/file/d/18LdlKztkTZdmtCeR43R5orRixgITHbbt/preview";
        }
        else if(d===9 && m===5){
            this.name="ALL MOTHERS OF AASHIANA";
            this.age="";
            this.wish="Wishing "+this.age+" Happy Mother's Day";
            this.to="TO";
            nm=19;
            this.desc="Mother’s Day is the special time of year when you get to celebrate your first best friend and the person you always turn to when you need advice. Mother’s Day is also a great time to show your love for all the other wonderful women in your life.\n"+
            "सारे जहां में नहीं मिलता बेशुमार इतना, सुकून मिलता है\n"+
            "मां के प्यार में जितना. बेहद मीठा कोमल होता है,\n"+
            "मां के प्यार से ज्यादा कुछ नहीं अनमोल होता है.\n"+
            "हैप्पी मदर्स डे";
            this.me="Click Pic!!";
        }
        const show=(this.state.menu)?"show":"";
        return(
            <div>
                <img onClick={()=>{this.togle();this.media()}} className="rounded-circle rotat sticky-top" src={this.src[nm]} alt="Birthday/Anniversary" height="250px" width="250px"/><br></br><br></br>
                <span style={{borderRadius:"20px"}} onClick={()=>{this.togle();this.media()}} className="mypic btn btn-outline-warning bg-white">{this.me}</span><br></br><br></br>
            <div id="description" style={{maxHeight:"20vh",overflow:"scroll",boxShadow:"0px 0px 5px 3px white"}} className={"bg-info rounded text-white ml-2 mr-2 collapse"+show}>
            <div style={{whiteSpace:"pre-line",margin:"10px 20px"}}>
                <table>
                <tbody>
                    <tr><th>{this.name}</th></tr>
                </tbody>
                </table>
                <span style={{textAlign:"left"}}>{this.desc}</span>
            </div>
            </div><br></br>
            {this.tags()}
            </div>
        );
    }
    tags() {
        if(this.wish!=="")
        {
            return(
        <div>
        <h3 className="text-danger bg-warning font-italic progress-bar-striped progress-bar-animated"><marquee  direction="left">{this.wish}</marquee></h3>
        <h3 className="text-white font-italic bg-danger progress-bar-striped progress-bar-animated">{this.to}</h3>
        <h3 className="text-success font-italic bg-warning progress-bar-striped progress-bar-animated"><marquee direction="right">{this.name}</marquee></h3>
        </div>
            );
        }
        else
        {
            return(
                <h3 className="text-success font-italic bg-warning progress-bar-striped progress-bar-animated"><marquee direction="right">{this.name}</marquee></h3>
            );
        }
        
    }
   togle(){
       this.setState({
           menu:!this.state.menu,
           music:!this.state.music
       });
   }
   media()
   {
       if(this.me==="Click Our Pic !!")
       {
           if(this.state.music===false)
           this.state.anniSong.play();
           else
           this.state.anniSong.pause();
       }
       else if(this.me==="Click My Pic !!"){
        if(this.state.music===false)
        this.state.birSong.play();
        else
        this.state.birSong.pause();
       }
   }
   
   componentDidMount()
   {
    if(this.wish!=="")
    {
    document.getElementById("back").style.background="url('images/6k2.gif'),url('images/cele.gif'),black";
    }
    else{
        document.getElementById("back").style.background="whiteSmoke";
    }
    if(this.me==="Click Our Pic !!")
    {
    this.state.anniSong.addEventListener('ended', () => {this.setState({ music: false,menu:false });this.media();});
    }
    else if(this.me==="Click My Pic !!"){
    this.state.birSong.addEventListener('ended', () => {this.setState({ music: false,menu:false });this.media();});
    }
    if(this.name==="Mr Vikas AND Mrs Jyoti" || this.name==="Mr Rajiv AND Mrs Savi")
    {
        this.setState({
            video:true
        })
    }
   }
   componentWillUnmount() {
    if(this.me==="Click Our Pic !!")
    {
    this.state.anniSong.removeEventListener('ended', () => {this.setState({ music: false,menu:false });this.media();});
    }
    else if(this.me==="Click My Pic !!"){
    this.state.birSong.removeEventListener('ended', () => {this.setState({ music: false,menu:false });this.media();});
    }
  }
    render(){
        const mstyle={
            backgroundImage:`url('images/aashiana.jpeg')`,
            height:"200px",
            backgroundSize:`contain`,
            opacity:"0.9"
        }
        const vid=(this.state.video)?"block":"none";
        return(
            <div>
                <div style={mstyle} className="container-fluid">
                    <div style={{display:"flex",height:"100%",justifyContent:"center",alignItems:"center",fontFamily:"cursive",opacity:"0.7"}}><h3 className="text-white font-italic font-weight-bolder text-white">AASHIANA</h3></div>
                </div>
            <div id="back" align="center" style={{padding:"20px",background:"whiteSmoke"}}>
                {this.check(this.state.date,this.state.month,this.state.year)}
            </div>
            <div style={{width:"100vw",height:"50vh",display:vid}}>
            <iframe title="anniversaryvideo" width="100%" height="200%" src={this.url}>
            </iframe>
            </div>
            </div>
        );
        
    }
       
}
export default Aashiana;