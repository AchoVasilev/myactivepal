import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoItemResource, EditTodoItemResource, TodoItemDetailsResource } from 'app/shared/models/checklist';
import { CheckListComponent } from '../check-list/check-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf, DecimalPipe } from '@angular/common';
import { IconButtonComponent } from '../../../../shared/components/buttons/icon-button/icon-button.component';

@Component({
    selector: 'active-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [IconButtonComponent, NgIf, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, CheckListComponent, DecimalPipe]
})
export class TodoListComponent {

  @Input({required: true})
  todoItems: TodoItemDetailsResource[] | null = [];

  @Output() itemChecked = new EventEmitter<string>();
  @Output() itemCreated = new EventEmitter<CreateTodoItemResource>();
  @Output() itemDeleted = new EventEmitter<string>();
  @Output() itemEdited = new EventEmitter<EditTodoItemResource>();

  shouldShow = false;

  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required])
  });

  onItemChecked(itemId: string) {
    this.itemChecked.emit(itemId);
  }

  onItemEdited(item: EditTodoItemResource) {
    this.itemEdited.emit(item);
  }

  onItemDeleted(itemId: string) {
    this.itemDeleted.emit(itemId);
  }

  showForm() {
    this.shouldShow = !this.shouldShow;
  }

  onBlur() {
    this.showForm();
    if (!this.formGroup.controls.name.pristine && this.formGroup.controls.name.valid) {
      const {name} = this.formGroup.value;
      this.itemCreated.emit({name: name!});
    }
  }
}
