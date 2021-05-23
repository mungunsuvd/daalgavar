class DatePicker{
    constructor(id, f){ 
        this.id = id; 
        this.callback = f;
        this.fixedDate = {};
    } 
    render(date){
        let months = ["Jan", "Feb", "Mar", "Ap", "May", "Jun", "Jul", "Au", "Sep","Oct", "Nov", "Dec"];
        this.fixedDate.year = date.getFullYear();
        this.fixedDate.month = date.getMonth();
        this.fixedDate.day = date.getDate();
        this.cont = document.getElementById(this.id);
        this.cont.innerHTML =months[date.getMonth()] +" "+ date.getFullYear();
        this.callback(this.id , this.fixedDate);
        this.cont.innerHTML = "<span id=previous>  <<  </span>" +  this.cont.innerHTML +  "<span id=next> >> </span> " + "<div class=week> <div>Sun</div>"+"<div>Mon</div>" +" "+"<div>Tue</div>"+" "+ "<div>Wed</div>"+""+"<div>Thur</div>"+""+ "<div>Fri</div>"+" "+ "<div>Sat</div>"+" "+ " </div>";  
        this.odor(date);
        let previous = this.cont.firstChild;
        let next = this.cont.firstChild.nextSibling.nextSibling;
        next.addEventListener("click", ()=>this.next(date));
        previous.addEventListener("click", ()=>this.previous(date));
    }
    render2(date){
        let months = ["Jan", "Feb", "Mar", "Ap", "May", "Jun", "Jul", "Au", "Sep","Oct", "Nov", "Dec"];
        this.fixedDate.year = date.getFullYear();
        this.fixedDate.month = date.getMonth();
        this.fixedDate.day = 1;
        this.cont = document.getElementById(this.id);
        this.cont.innerHTML =months[date.getMonth()] +" "+ date.getFullYear();
        
        this.cont.innerHTML =  "<span id=previous> << </span>"+ this.cont.innerHTML + "<span id=next> >> </span> " + "<div class=week> <div>Sun</div>"+"<div>Mon</div>" +" "+"<div>Tue</div>"+" "+ "<div>Wed</div>"+""+"<div>Thur</div>"+""+ "<div>Fri</div>"+" "+ "<div>Sat</div>"+" "+ " </div>";  
        this.odor(date);
        let previous = this.cont.firstChild;
        let next = this.cont.firstChild.nextSibling.nextSibling;
        next.addEventListener("click", ()=>this.next(date));
        previous.addEventListener("click", ()=>this.previous(date));
    }
    
    previous(date){
        if(date.getMonth()>0){
            date.setMonth(date.getMonth()-1);
        }else{
            date.setMonth(11);
            date.setFullYear(date.getFullYear()-1);
        }
        this.render2(date);
    }
    next(date){
        if( date.getMonth() < 11){
            date.setMonth(date.getMonth()+1);
        }else{
            date.setMonth(0);
            date.setFullYear(date.getFullYear()+1);
        }
        this.render2(date);
    }
    sar(date){
        let sar=date.getMonth();
        sar = sar + 1;
        if(sar === 1 || sar === 3 || sar === 5 || sar === 7 || sar ===8 || sar === 10 || sar === 12){
        return  31; 
        }else if(sar===4 || sar ===6 || sar ===9 || sar === 11){
            return 30;
        }else if(date.getFullYear()% 400===0){
            return 29;
        }else 
        return 28;
    }
    osar(date){
        let sar=date.getMonth();
        if(sar == 0){
            sar = 12;
        }
        if(sar === 1 || sar === 3 || sar === 5 || sar === 7 || sar ===8 || sar === 10 || sar === 12){
        return  31; 
        }else if(sar===4 || sar ===6 || sar ===9 || sar === 11){
            return 30;
        }else if(date.getFullYear()% 400===0){
            return 29;
        }else 
        return 28;
    }
    new(day){
        let d = new Date(this.fixedDate.year, this.fixedDate.month, day);
        this.render(d);
    }
    odor(date){
        let now = new Date(date.getFullYear(), date.getMonth(), 1);
        let last = new Date(date.getFullYear(), date.getMonth(), this.sar(date));
        let negen = now.getDay()+1;
        let lastday= last.getDay()+1;
        let day = this.sar(date); 
        let calendar = document.createElement("div");
        this.cont.appendChild(calendar);
        calendar.setAttribute("class", "cal");
        let osar = this.osar(date);
        let io = osar-negen+2;
        for(let i=io; i<=osar; i++){
            let div = document.createElement("div");
            div.setAttribute("class", "cell");
            let divString = document.createTextNode(i);
            div.appendChild(divString);
            calendar.appendChild(div);
        }
        for(let j=1; j<=day; j++){
            let div = document.createElement("div");
            div.setAttribute("class", "call");
            let dicString = document.createTextNode(j);
            div.appendChild(dicString);
            calendar.appendChild(div);  
            div.addEventListener("click", ()=>{
                this.new(j);
            })
             if(this.fixedDate.day===j){
                div.setAttribute("class", "activ");
             }        

        } 
        let lastd = 7 - lastday;
        for(let g=1; g<=lastd; g++){
            let div = document.createElement("div");
            div.setAttribute("class", "cell");
            let divString = document.createTextNode(g);
            div.appendChild(divString);
            calendar.appendChild(div);
        }
    };
    
}