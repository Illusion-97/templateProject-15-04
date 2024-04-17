import {AbstractControl, FormGroup} from "@angular/forms";

export abstract class AbstractFormComponent {
  abstract form: FormGroup

  getControl(name: string) {
    const control = this.form.get(name)
    if(!control) {
      throw Error("Contrôle introuvable")
    }
    return control;
  }

  hasInteraction(control: AbstractControl) {
    return control.touched || control.dirty;
  }

  isInvalid(control: string | AbstractControl) {
    if(typeof control === "string") {
      control = this.getControl(control)
    }
    return this.hasInteraction(control) && control.invalid
  }

  hasError(control: string | AbstractControl, errorCode: string) {
    if(typeof control === "string") {
      control = this.getControl(control)
    }

    return this.hasInteraction(control) && control.hasError(errorCode)
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if(this.form.valid){
      this.onSubmit$()
    }
  }

  abstract onSubmit$(): void
}
