// method 1



#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }

        for (int k = 1; k <= (i * 2) - 1; k = k + 1)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}




// method 2





#include <stdio.h>

int main()
{   int n;
    scanf("%d",&n);
    for (int i=0;i<n;i++){
        int count=0;
        for(int j=0;j<(2*n)-1;j++){
            if(j<(n-1)-i || j>=(n+i)){
                printf(" "); 
            }
            else{
                printf("*");
            }
            
            
        }
        printf("\n");
    }

    return 0;
}


