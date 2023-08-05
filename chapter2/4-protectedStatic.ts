{
  class User {
    // protected 부모/자식 간에만 사용 가능
    protected x = 10;
    // static 부모만 쓸 수 있으며 자식은 사용 불가능
    static y = 20;
    // y = 20;
    static skill = 'js';
    intro = `${this.skill} 전문가입니다.`;
  }

  class NewUser extends User {
    doThis() {
      this.x = 20;
    }
  }

  let user = new NewUser();
  console.log(user);
  user.doThis();
  console.log(user);
  console.log(User.y);

  let cheolSu = new User();
  console.log(cheolSu);

  class User2 {
    // 클래스 내부에서만 수정 가능
    private static x = 10;
    // 내부 외부 상관없이 수정 가능
    public static y = 20;
  }
}
