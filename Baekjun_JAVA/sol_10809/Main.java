package sol_10809;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		String s=sc.next();
		sc.close();
		for(char c='a';c<='z';c++) {	
			System.out.print(s.indexOf(c)+" ");
		}
		
		//char 도 for문에서 돌아갑니다
		//indexOf() 는 문자열중 문자가 처음으로 나오는 위치를 반환하는 메소드입니다.
	}

}
