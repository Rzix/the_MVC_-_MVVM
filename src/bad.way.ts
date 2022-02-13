class Driver{
    driver(distinction: string){
        console.log(`driver:Im drivering to ${distinction}`);    
    }
}
class SnapDriver{
    driver2(distinction: string){
       console.log(`snap_driver:Im drivering to ${distinction}`);    
    }
}

class CEO{
    visit_business_partner(driver: Driver,location:string){
        console.log(`ceo:I want to visit my bussines partner in ${location}`)
        driver.driver(location)
        console.log('ceo: Im arivved with first dtiver(driver1)')
    }
    visit_business_partner_with_Other_Driver(driver2: SnapDriver,location:string){
        console.log(`ceo: I want go to the ${location} with other driver`)
        driver2.driver2(location)
        console.log('ceo: Im arivved with secend driver(driver2)')
    }
}


export function BadWay(){
    let x =Math.floor(Math.random()*10)
    let ceo= new CEO();
    let driver = new Driver();
    let drivertwo = new SnapDriver()
    if(x<=10&&x>5){
        ceo.visit_business_partner(driver,'Melat_Park');
    }
    else  
    ceo.visit_business_partner_with_Other_Driver(drivertwo,'Melat_Park')

}