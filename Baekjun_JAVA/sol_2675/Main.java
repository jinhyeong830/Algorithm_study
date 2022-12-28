package sol_2675;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner (System.in);
		int tc=sc.nextInt();//text case
		for(int i=0; i<tc ;i++) {
			int r=sc.nextInt();
			String s=sc.next();
			char[] carr=s.toCharArray();
			
			for(int j=0; j<carr.length ;j++) {
				for(int k=0; k<r;k++) {
					System.out.print(carr[j]);//for문 세개 써서 맘에 안드는데 다른 방법 찾아보기!
				}
			}
			System.out.println();
		}
		sc.close();
		

	}

}
