const TimeSlot = (startI,startJ,ind1,endI,endJ,ind2,slot) => {
    let timeArray = [];
    let i = startI, j = startJ,counter = ind1;

    for(let counter=0;;j+=slot){

        if(j==60){
            j=0;
            i++;
        }

        if(i==12 && counter == 0){
            counter ++;
        }

        if(i==13){
            i-=12;
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

        if(counter == 0){
            str += " AM";
        }else{
            str += " PM";
        }

        timeArray.push(str);

        if(endI == i && endJ == j && counter == ind2){
            break;
        }
    }

    return timeArray;
}

export default TimeSlot;