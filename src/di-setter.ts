interface InDriver{
    driver(distinction: string): void;
}

class SnnapDriver implements InDriver{
    driver(distinction: string): void {
        console.log(`snap_driver:Im drivering to ${distinction}`);  
    }
}
class FirstDriver implements InDriver{
    driver(distinction: string): void {
        console.log(`The First Driver: Im driving to ${distinction}`)
    }  
}

class CEO{
    driver!: InDriver | any
    constructor(){}
    setDriver(_driver:InDriver){  //////new
        this.driver= _driver;
    }
   
    visit_business_partner(location:string){
        if(!this.driver){
             throw new Error('You Most Call the Driver');
        }
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

export function Di_constructor(){
    let x
    x=new CEO()
   let z = Math.floor(Math.random() * 10);
   if(z<=10&&z>5){  
       x.setDriver(new SnnapDriver())
     return  x.visit_business_partner_with_Other_Driver('Melat_Park')
   }
   else
   x.setDriver(new FirstDriver())
   return x.visit_business_partner('Mashhad')
}