package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


// 수 찾기,, 커밋한다고 내가 이걸 집가서 볼까?
// https://www.acmicpc.net/problem/1920
public class Silver_1920 {
    public static void main(String[] args) throws IOException, NumberFormatException {
        // 첫째 줄에 자연수입력
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // String input = br.readLine(); // 이렇게 하면

        /*
        * readline(): IoException 클래스 throws 받아야 사용할 수 있음.
        *  */
        int a = Integer.parseInt(br.readLine()); // br.readLine 은  기본적으로 숫자를 입력받을수 없기 때문에 숫자입력받을 때는 형변환 필요

        // int n = scan.nextInt();

        // for(int i = 0 ; i<n ; i++){
        //     int aElement = scan.nextInt();
        //     aArray.add(aElement);
        // }




        // 방법 2가지
        // 방법1) 무식한 방법: 이중포문으로 하나하나 비교한다.
        // 방법2) 기본 자료구조 이용 방법: TreeSet 을 이용하면 더 쉬울지도 몰라!
    }
}
