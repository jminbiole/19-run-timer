const time2 = 3000;
export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('new-run'),
    this.use('toLeft', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('run-info'),
    this.use('toRight', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toLeft', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('run-info'),
    this.toRoute('edit-run'),
    this.use('toUp', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toDown', {
      use: [`flyTo`, { time2 }],
    })
  );
}
