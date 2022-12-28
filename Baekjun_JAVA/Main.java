import java.util.ArrayList;
import java.util.Scanner;

//3052-서로다른 나머지의 갯수
public class Main {

	public static void main(String[] args) {		
		Scanner sc=new Scanner(System.in);
		//ox 담을 String 형 선언
		String store_ox=null;
		
		//ox만큼 길이인(역시 가변적) 각 인덱스의 점수를 담을 integer형 선언
		ArrayList <Integer> score=new ArrayList<Integer>();
		
		//tc받기
		int tc=sc.nextInt();
		for(int i=0; i<tc;i++) {
			store_ox=sc.next();
			//string to char array
			char[] arr=store_ox.toCharArray();
			
			
			//logic start :arr[0] 값 지정
			if(arr[0]=='O')
				score.add(1);
			else if(arr[0]=='X')
				score.add(0);
			
			//4가지 경우 ox oo xx xo로 나눠서 점수배열에 각 점수 넣기
			for(int j=1;j<arr.length;j++) {
				if(arr[j]=='O')
					score.add((score.get(j-1))+1);
				else if(arr[j]=='X')
					score.add(0);
			}
			
			int sum=0;
			for(int j=0;j<score.size();j++) {
				sum+=score.get(j);
			}
			System.out.println(sum);
			score.clear();
		}
		sc.close();

	}

}
