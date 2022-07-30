import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/data-services/contact.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  contact: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contactService.getContact().subscribe((res) => {
      this.contact = res;
    }
    );
  }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.contactService.deleteContact(id).subscribe(res => {
      console.log(res);
      this.contact.map((item) => {
        if (item.id === id) {
          this.contact.splice(this.contact.indexOf(item), 1);
        }
      }
      );
    }
    );
  }

}
