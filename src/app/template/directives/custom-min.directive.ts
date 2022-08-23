import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minValue!: number;

    constructor(){
        // console.log('Directiva: ',this.minValue);
    }

    validate(control: FormControl) {
        
        const inputValue = control.value;
        // console.log(inputValue);
        // console.log(this.minValue);
        return (inputValue < this.minValue)
                ? {'customMinError': true}
                : null;
    }

}