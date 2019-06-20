/ => PublicZone
  /home => HomeComponent
  /post-list => PostListComponent
  /form => FormCommponent
  /form-group => FormGroupComponent
  /login => LoginComponent

/admin = PrivateZone, AuthGuard
  /user => module
    /list => component
    /form => component
