
// 1A.STUDENT
// 1A.STUDENT
// 1A.STUDENT


import java.util.Scanner;

public class Student {
String USN ; String Name ; String branch ; int phone;
void insertRecord(String reg,String name,String brnch,int ph)
{
        USN=reg;Name=name;branch=brnch;phone=ph;
}

        void displayRecord()
        {
                System.out.println(USN+" "+Name+" "+branch+" "+phone);

        }
public static void main(String args[]){
        Student s[]=new Student[100];
        Scanner sc=new Scanner (System.in);
        System.out.println("enter the number of students");
        int n=sc.nextInt();
        for(int i=0;i<n;i++)
                s[i]=new Student();
        for(int j=0;j<n;j++)
        {
                System.out.println("enter the usn,name,branch,phone");
                String USN=sc.next();
                String Name=sc.next();
                String branch=sc.next();
                int phone=sc.nextInt();
                s[j].insertRecord(USN, Name,branch,phone);
        }
        for(int m=0;m<n;m++){
                s[m].displayRecord();

        }

}

}





////1B.STACK
////1B.STACK
////1B.STACK
////1B.STACK


import java.util.Scanner;

public class Stack {
        final int max=5;
        int s[]=new int[max];
        int top=-1;
        void push(int ele)
        {
                if(top>=max-1)
                        System.out.println("stack overflow");else
                                s[++top]=ele;
        }
        void pop()
        {
                int z=0;
                if(top==-1)
                        System.out.println("stack underflow");
                else
                        z=s[top--];
        }
        void display()
        {
                if(top==-1)
                        System.out.println("stack empty");
                else
                {
                        for(int i=top;i>-1;i--)
                                System.out.println(s[i]+"");

                }
        }
public static void main(String args[])
{
        int q=1;
        Stack m=new Stack();
        System.out.println("program to perform stack operation");
        Scanner sc=new Scanner(System.in);
        while(q!=0)
        {
                System.out.println("enter 1.push 2.pop 3.diplay");
                System.out.println("enter your choice");
                                int ch=sc.nextInt();
                                switch(ch)
                                {
                                case 1:System.out.println("enter the element to be pushed");
                                int ele=sc.nextInt();m.push(ele);break;
                                case 2:m.pop();
                                break;
                                case 3: System.out.println("elements in the stack are");
                                m.display();
                                break;case 4:q=0;

                                }
        }
}
}




/////2A.MULTILEVEL
/////2A.MULTILEVEL
/////2A.MULTILEVEL
/////2A.MULTILEVEL



class staff
{
        int staffid,phone,salary;
        String name;
        public staff(int id,int no,int sal,String na)
        {
                staffid=id;
                phone =no;
                salary=sal;
                name=na;
        }
        void display()
        {
                System.out.println("");
                System.out.println("staffid:"+""+staffid);
                System.out.println("staff phone number:"+""+phone);
                System.out.println("staff salary:"+""+salary);
                System.out.println("staff name:"+""+name);
        }
}
        class teaching extends staff
        {
        String domain;
        int no_of_publication;
        public teaching(int id,int no,int sal,String na,String d,int nop)
        {
                super(id,no,sal,na);
        domain=d;
        no_of_publication=nop;
        }

        void Tdisplay()
        {
                System.out.println("");
                System.out.println("teaching staff details");
                super.display();
                System.out.println("domain:"+""+domain);
                System.out.println("no_of_publication:"+""+no_of_publication);
        }

}
class technical extends staff{
        String skills;
        public technical(int id,int no,int sal,String na,String sk)
        {
        super(id,no,sal,na);
        skills=sk;
        }
void Tdisplay()
{
        System.out.println("");
        System.out.println("technical staff details");
        super.display();
        System.out.println("skills:"+""+skills);

}

}
class contract extends staff
{
        int period;
        public contract(int id,int no,int sal,String na,int pd)
        {super(id,no,sal,na);
        period=pd;

        }
void Cdisplay()
{
System.out.println("");
System.out.println("contract staff details");
super.display();
System.out.println("contract period :"+""+period+"years");
}
}
public class Multilevel
{
        public static void main(String args[])
        {
                teaching t1=new teaching(11,998765434,31000,"anil","cse",10);
                teaching t2=new teaching(12,996655546,30000,"anl","ise",9);
                teaching t3=new teaching(13,999933442,32000,"anusha","eee",8);
                        t1.Tdisplay();
                        t2.Tdisplay();
                        t3.Tdisplay();
                        technical te1=new technical(21,994433221,22000,"kumar","c");
                        technical te2=new technical(22,998877665,28000,"krishna","java");
                        technical te3=new technical(23,734747474,33000,"kiran","java");
                        te1.Tdisplay();
                        te2.Tdisplay();
                        te3.Tdisplay();
                        contract ct1=new contract(31,4646,35000,"anil",3);
                        contract ct2=new contract(32,4786,39000,"meghana",2);
                        contract ct3=new contract(33,34784,30000,"uma",4);
                        ct1.Cdisplay();
                        ct2.Cdisplay();
                        ct3.Cdisplay();
        }
}







/////2A.CUSTOMER
/////2A.CUSTOMER
/////2A.CUSTOMER
/////2A.CUSTOMER


import java.util.Scanner;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Customer {
String name;
String date;
public void read()
{
        Scanner input=new Scanner (System.in);
        name=input.next();
        date=input.next();

}
public void display()
{
        System.out.println(name+",");
        String delims="/";
        StringTokenizer st=new StringTokenizer(date,delims);
        while (st.hasMoreElements()){
                System.out.print(st.nextElement()+",");

        }
        System.out.println();

}
public static void main(String[]args)
{
        System.out.println("enter the customer details");
        Customer[]cus=new Customer[30];
        Scanner Sc=new Scanner (System.in);
        System.out.println("enter the number of customer");
        int n=Sc.nextInt();
        for(int i=0;i<n;i++)
        {
                System.out.println("enter the name and date");
                cus[i]=new Customer();
                cus[i].read();

        }
        for(int i=0;i<n;i++)
                cus[i].display();
}

}




/////3A.DIVISION
/////3A.DIVISION
/////3A.DIVISION
/////3A.DIVISION



import java.util.Scanner;
public class Division {
        public static void main(String[]args)
        {
                int a,b,result;
                Scanner input=new Scanner(System.in);
                System.out.println("input two integers");
                a=input.nextInt();
                b=input.nextInt();
                try{
                        result=a/b;
                        System.out.print("result="+result);;

                }
                catch(ArithmeticException e)
                {
                        System.out.println("Exception caught:Divide by zeroerror" +e);

                }
        }

}


///////3B.MULTITHREAD
///////3B.MULTITHREAD
///////3B.MULTITHREAD
///////3B.MULTITHREAD


import java.util.Random;
class second implements Runnable
{
public int x;
public second(int x)
{
        this.x=x;

}
public void run()
{
        System.out.println("second thread:square of the number is"+x*x);

}

}
class Third implements Runnable
{
public int x;
public Third(int x)
{
        this.x=x;

}
public void run()
{
        System.out.println("third thread:cube of the number is"+x*x*x);

}
}
class first extends Thread
{
public void run()
{
        int num=0;
        Random r=new Random();
        try
        {
                for(int i=0;i<5;i++)
                {
                        num=r.nextInt(10);
                        System.out.println("first thread generated number is "+num);
                        Thread t2=new Thread(new second (num));
                        t2.start();
                        Thread t3=new Thread(new Third (num));
                        t3.start();
                        Thread.sleep(10000);
                        System.out.println();

                }
        }
        catch(Exception e)
        {
                System.out.println(e.getMessage());
        }
}
}
public class Multithread
{
public static void main(String args[])
{
        first a =new first();
        a.start();
}
}
