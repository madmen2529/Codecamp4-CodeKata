// Create a component named MessageComponent
var VacancySign = React.createClass({
    render: function() {
      return (
        <div>{this.props.hasvacancy}</div>
      );
    }
  });
  
  // Render an instance of MessageComponent into document.body
  ReactDOM.render(
    <VacancySign hasvacancy={true} />,
    document.body
  );