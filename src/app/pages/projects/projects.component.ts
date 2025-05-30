import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/Project';
import { ICONS } from '../../shared/icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectsList: any[] = [];
  selectedTag: string | null = null; // Almacena el filtro seleccionado
  tagsDictionary: { [key: string]: { name: string; class: string; icon: string; key: string } } = {
    angular: {
      name: 'Angular',
      class: 'bg-red-800 text-white',
      icon: 'angular',
      key: 'angular',
    },
    tailwind: {
      name: 'Tailwind CSS',
      class: 'bg-blue-500 text-white',
      icon: 'tailwind',
      key: 'tailwind',
    },
    react: {
      name: 'React.js',
      class: 'bg-blue-800 text-white',
      icon: 'react',
      key: 'react',
    },
    typescript: {
      name: 'Typescript',
      class: 'bg-blue-700 text-white',
      icon: 'typescript',
      key: 'typescript',
    },
    html: {
      name: 'HTML5',
      class: 'bg-orange-500 text-white',
      icon: 'html',
      key: 'html',
    },
    javascript: {
      name: 'JavaScript',
      class: 'bg-yellow-400 text-black',
      icon: 'javascript',
      key: 'javascript',
    },
    css: {
      name: 'CSS3',
      class: 'bg-blue-600 text-white',
      icon: 'css',
      key: 'css',
    },
    java: {
      name: 'Java',
      class: 'bg-sky-500 text-white',
      icon: 'java',
      key: 'java',
    },
    nodejs: {
      name: 'Node.js',
      class: 'bg-green-700 text-white',
      icon: 'nodejs',
      key: 'nodejs',
    }
  };
  constructor(private sanitizer: DomSanitizer) {
    // Diccionario global de tags
    
    const rawProjects = [
      {
        image: 'assets/img/social-app.png',
        title: 'Full Stack Social App',
        description: 'Una aplicación web con similitud a facebook donde puedes agregar usuarios, darles likes, crear publicaciones y chatear en tiempo real',
        tags: ['angular', 'java', 'nodejs', 'typescript', 'html', 'css'],
        link: 'https://draacckeer.github.io/FullStackSocialApp',
        github: 'https://github.com/Draacckeer/TravelApp',
      },
      {
        image: 'assets/img/temporizador.png',
        title: 'Temporizador',
        description: 'Un temporizador hecho en html, css y js.',
        tags: ['html', 'javascript', 'css'],
        link: 'https://draackeerr.github.io/temporizador/',
        github: 'https://github.com/Draackeerr/temporizador',
      }
    ];
    this.projectsList = rawProjects.map(project => ({
    ...project,
    tags: project.tags.map(key => this.tagsDictionary[key]),
  }));
    
  }

  // Extraer dinámicamente las etiquetas únicas de todos los proyectos
  getUniqueTags(): any[] {
    const tagsSet = new Map<string, any>();
    this.projectsList.forEach((project) => {
      project.tags.forEach((tag: { key: string; name: string; class: string }) => {
        if (!tagsSet.has(tag.key)) {
          tagsSet.set(tag.key, tag);
        }
      });
    });
    const uniqueTags = Array.from(tagsSet.values());
    console.log('Unique Tags:', uniqueTags);  // comprobar
    return uniqueTags;
  }

  // Filtrar proyectos por etiqueta
  getFilteredProjects(): any[] {
    if (!this.selectedTag) {
      return this.projectsList;
    }
    return this.projectsList.filter((project) =>
      project.tags.some((tag: { key: string }) => tag.key === this.selectedTag)
    );
  }

  // Seleccionar una etiqueta para filtrar
  selectTag(tag: string | null): void {
    this.selectedTag = tag;
  }

  getSvg(icon: string): SafeHtml {
    const svg = ICONS[icon] || ICONS['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
