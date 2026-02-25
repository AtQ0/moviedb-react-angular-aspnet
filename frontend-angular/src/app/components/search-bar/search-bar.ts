import { Component } from "@angular/core";
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-search-bar',
    imports: [LucideAngularModule, FormsModule],
    templateUrl: './search-bar.html'
})
export class SearchBar { }