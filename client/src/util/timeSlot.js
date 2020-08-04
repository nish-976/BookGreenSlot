const TimeSlot = (slot) => {
    let timeArray = [];
    for(let i=0,j=0,counter=0;;j+=slot){

        if(i == 12 && counter == 1){
            break;
        }

        if(j==60){
            j=0;
            i++;
        }

        if(i==13 && counter == 0){
            i-=12;
            counter ++;
        }

        let str;

        if(Math.floor(i/10) == 0){
            str = "0" + i.toString();
        }else{
            str = i.toString();
        }

        if(j == 0){
            str += ":0" + j.toString();
        }else{
            str += ":" + j.toString();
        }

        if(counter == 0 && i != 12){
            str += " AM";
        }else{
            str += " PM";
        }
        
        if(str !== "12:00 PM"){   
        timeArray.push(str);
        }
    }

    return timeArray;
}

export default TimeSlot;