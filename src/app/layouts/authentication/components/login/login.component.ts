import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/shared/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, DoCheck {
  public faUser = faUser;
  public faLock = faLock;

  public email: string = '';
  public password: string = '';

  public buttonStyle =
    'color: var(--whiteSecondary); background: var(--whiteTertiary); cursor: not-allowed;';

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {}

  public ngDoCheck() {
    if (!!!this.email || !!!this.password) {
      this.buttonStyle =
        'color: var(--whiteSecondary); background: var(--whiteTertiary); cursor: not-allowed;';
      return true;
    }
    this.buttonStyle =
      'color: var(--darkSecondary); background: var(--primary); cursor: pointer;';
    return false;
  }

  public onSubmit() {
    console.log(this.email, this.password);
  }
}
