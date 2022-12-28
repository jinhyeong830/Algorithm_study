package silver_sol_1065;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int b = sc.nextInt();
		sc.close();
		int cnt = 0;
		for (int i = 1; i <= b; i++) {
			if (ariMath(i) == true)
				cnt++;
		}

		System.out.println(cnt);
	}

	public static boolean ariMath(int num) {
		int[] a = new int[3];

		if (num < 100)
			return true;
		else if(num==1000)
			return false;
		else {//세자리 수 일 때. a[0] [1] [2] 비교
			for (int i = 0; i < 3; i++) {
				a[i] = num % 10; //
				num /= 10;
			}
			if(a[0]-a[1]==a[1]-a[2]) return true;
			else return false;
		}

	}

}
