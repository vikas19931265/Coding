let xmlContact='';
fetch('Policy.xml').then((response)=>
{
   response.text().then((xml)=>{
      let parser= new DOMParser();
      let xmldoc= parser.parseFromString(xmlContact,'application/xml'));
      console.log(xmldoc)
});
