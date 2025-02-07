import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contact = {
    email: "haaithaam@hotmail.com",
    phone: "0788821779",
    linkedIn: "https://www.linkedin.com/in/haithamkh/",
    github: "https://github.com/HaithaamKH"
  };
  
  aboutMe = "I am a passionate software developer with a strong interest in technology and continuous learning. I enjoy solving complex problems and building innovative solutions. My goal is to grow in a dynamic environment where I can contribute, learn, and improve my skills. I am always excited to explore new tools and technologies and am driven by the opportunity to create meaningful software that can make an impact.";
}
