import { Component } from '@angular/core';

interface Tag {
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  briefText : string = '';

  designTags: Tag[] = [
    { name: 'Logo', active: false },
    { name: 'Branding', active: false },
    { name: 'Packaging', active: false },
    { name: 'Explainer Video', active: false },
  ];

  devTags: Tag[] = [
    { name: 'Website', active: false },
    { name: 'Web Application', active: false }
  ];

  toggleTag(tag: Tag) {
    tag.active = !tag.active;
  }

  onSendClick(){
   let designList = this.designTags.filter(tag=> tag.active == true);
   let devList = this.devTags.filter(tag=> tag.active == true);

    let text = 'Hey Bhavik,';
    if(designList.length > 0){
      text = text + 'I want a design for '+this.designTags.filter(tag=> tag.active == true).map(t=>t.name).join(',');
    }
    if(devList.length > 0){
      if(designList.length > 0){
        text = text + ' and ';
      }else{
        text = text + 'I want a';
      }
      text = text + ' development for '+this.devTags.filter(tag=> tag.active == true).map(t=>t.name).join(',');
    }

    if(this.briefText.trim()){
      text = text+ ". \nHere's a brief : "+this.briefText;
    }

    console.log(text);
    window.open('https://wa.me/919930311650?text='+encodeURIComponent(text));
  }

}
