import { createInjector } from 'typed-inject';

interface InDriver{
     navigator:GPS
    driver(distinction: string): void;
}

interface GPS{
    navigate(start:string, end : string): string[]//خروجیه مسیر ها
}


class GoogleMap implements GPS {
    public static inject = [] as const;
    navigate(start: string, end: string): string[] {
        let places:string[]=[];
        places.push(start);
        places.push(' gonabad')
        places.push(end)

        return places
    }
}
class NeshanNavigator implements GPS {
    public static inject = [] as const;
    navigate(start: string, end: string): string[] {
        let places:string[]=[];
        places.push(start);
        places.push('ghaem')
        places.push(end)

        return places
    }
}
class SnnapDriver implements InDriver{
    public static inject = ['Gps'] as const;
    constructor(public navigator:GPS){ }
    driver(end: string): void {
        this.navigator.navigate("here",end)
        console.log(`snap_driver:Im drivering to ${end}`);  
    }
}
class FirstDriver implements InDriver{
    public static inject = ['Gps'] as const;
    constructor(public navigator:GPS){}
    driver(end: string): void {
        this.navigator.navigate('here',end)
        console.log(`The First Driver: Im driving to ${end}`)
    }  
}

class CEO{
    public static inject = ['driver'] as const;
    constructor(private driver:InDriver){

    }
    visit_business_partner(location:string){
        console.log(`ceo:I want to visit my bussines partner in ${location}`)
        this.driver.driver(location)
        console.log('ceo: Im arivved with first dtiver(driver1)')
    }
    visit_business_partner_with_Other_Driver(location:string){
        console.log(`ceo: I want go to the ${location} with other driver`)
        this.driver.driver(location)
        console.log('ceo: Im arivved with secend driver(driver2)')
    }
}



export function Di_Container(){
    const appInjector=  createInjector()
    .provideClass('Gps',GoogleMap)
    .provideClass('driver',SnnapDriver)
    .provideClass('ceo',CEO)
    const ceo=appInjector.resolve('ceo')
    let z = Math.floor(Math.random() * 10);
    if(z<=10&&z>5){
    ceo.visit_business_partner('Mashhad')
    }
    else
    ceo.visit_business_partner_with_Other_Driver('qhom')
}






export function Di_constructor(){
    let x
   let z = Math.floor(Math.random() * 10);
   if(z<=10&&z>5){
       x=new CEO(new SnnapDriver(new GoogleMap()))
    return x.visit_business_partner_with_Other_Driver('qhom')
   }
   else
   x=new CEO(new FirstDriver(new GoogleMap()))
   return x.visit_business_partner('Mashhad')
}



