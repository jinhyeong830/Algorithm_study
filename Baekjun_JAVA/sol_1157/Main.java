package sol_1157;

//포문을 무려 네개ㅏ!! 다른 사람 코드도 참고 꼭 하기
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String st = sc.next();
		sc.close();
		//알파벳 몇 번 나올지 담을 배열선언&초기화
		int[] alphaArr = new int[26];
		for (int i = 0; i < alphaArr.length; i++) {
			alphaArr[i] = 0;
		}
		
		//입력 받은 문자열 char형 배열으로
		char[] charArr = st.toCharArray();
		
		// 65~90이 대문자 A to Z ASCII 코드.97부터가 소문자!
		//입력 문자열 처음부터 끝까지 검사(i) 입력 문자열[i]이 a거나 A일 때~z거나Z일 때 알파배열에 각 알파벳별 인덱스에 해당하는 값 +1 해주기 
		for (int i = 0; i < charArr.length; i++) {
			for (int j = 65; j < 91; j++) {
				if (charArr[i] == j || charArr[i] == j + 32)
					alphaArr[j - 65] += 1;
			}
		}
		//tmp max각 최대값의 인덱스번호, 최댓값 저장하는 변수 맥스를 선언해야 비교할 수 이쓰
		int tmp = 0;
		int max = alphaArr[0];
		for (int i = 0; i < alphaArr.length - 1; i++) {
			if (max < alphaArr[i + 1]) { //최댓값과 최댓값에 해당하는인덱스 넘버 구하기
				max = alphaArr[i + 1];
				tmp = i + 1;
			}
		}
		char c = (char) (tmp + 65); //제일많이 나온 알파벳은 인덱스+65(대문자로 변환하기 위해)
		
		//최댓값이 겹치면(2번 이상이면) 물음표 출력하기 위한 포문
		int cnt = 0;
		for (int i = 0; i < alphaArr.length; i++) {
			if (max == alphaArr[i])
				cnt++;
		}
		if (cnt == 1)
			System.out.println(c);
		else
			System.out.println("?");
	}

}
