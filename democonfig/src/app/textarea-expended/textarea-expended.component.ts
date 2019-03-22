import { Component, OnInit,ViewChild,Renderer2,forwardRef} from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';
export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExpandedComponent),
  multi: true,
};
@Component({
  selector: 'app-textarea-expended',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
  templateUrl: './textarea-expended.component.html',
  styleUrls: ['./textarea-expended.component.sass']
})
export class TextareaExpandedComponent implements ControlValueAccessor {
  // https://alligator.io/angular/custom-form-control/
  // https://codecraft.tv/courses/angular/advanced-topics/configurable-custom-validators/
  // https://blog.angularindepth.com/never-again-be-confused-when-implementing-controlvalueaccessor-in-angular-forms-93b9eee9ee83
  @ViewChild('textarea') textarea;

  onChange;
  onTouched;

  writeValue( value : any ) : void {
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  constructor( private renderer : Renderer2 ) {
  }

  change( $event ) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }
}