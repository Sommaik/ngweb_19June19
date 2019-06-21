/ => PublicZone
  /home => HomeComponent
  /post-list => PostListComponent
  /form => FormCommponent
  /form-group => FormGroupComponent
  /login => LoginComponent
  /register => RegisterComponent

/admin = PrivateZone, AuthGuard
  /user => module
    /list => UserListComponent
    /form => UserFormComponent

