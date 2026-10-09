


class node{
	public:
	int data;
	node* next;

	node(int data)
	{
		this->data=data;
		this->next=nullptr;

	}

};


class quene
{

public:
node *front;
node *rear;

quene()
{
front=NULL;
rear=NULL;

}

void enquene(int d){

node* temp=new node(d);


	if(rear==NULL)
	{
		front=temp;
		rear=temp;


}

else
{

rear->next=temp;
rear=temp;


}


}

void dequeue()
{
	if(front==NULL)
	{
		cout<<"the queue is empty"<<endl;

	}

	else{
		node* temp=front;


		front=front->next;
		delete temp;

		if(front==NULL)
		rear=NULL;



	}
}
};