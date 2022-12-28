package sol_11720;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();// 숫자의 개수,,배열의 length,
		String s=sc.next();
		
		//char 를 입력받거나... string 을 제한하거나!?
		
		int sum = 0;
		for (int j = 0; j <n; j++) {
			sum += s.charAt(j) - '0';// need char to integer
		}
		System.out.println(sum);

		sc.close();

	}

}
