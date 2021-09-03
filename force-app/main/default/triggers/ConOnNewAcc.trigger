trigger ConOnNewAcc on Account (after insert){
    Public List<Contact> con = new List<Contact>();
    For(Account Acc:Trigger.new ){ 
        Contact c=new contact();
        c.accountid=acc.id;
        c.Lastname=acc.Name; 
        c.phone=Acc.phone;
        c.mailingcity=acc.Billingcity;
        con.add(c);
    } 
    Insert Con;
}