public class index {
  public static void main(String[] args){
    int[] number = new int[3];
    number[0] = 21;
    number[1] = 38;
    number[2] = 12;
    int max = -2147483648;
    int cnt = 0
    while(true){
      if(max < number[cnt]){
        max = number[cnt];
      }
      cnt++;
      if(number.lenght <= cnt){
        break;
      }
    }
    System.out.println(max);
  }
}