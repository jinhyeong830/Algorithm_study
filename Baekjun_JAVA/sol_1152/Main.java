package sol_1152;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String s=sc.nextLine();
		sc.close();
		s=s.trim();
		String[] s1= s.split(" ");
		
		int n=s1.length;
		System.out.println(n);
	}
}
